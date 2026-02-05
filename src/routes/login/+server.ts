import { json } from '@sveltejs/kit';
import { db } from '$lib/db/index';
import { users, sessions } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import argon2 from 'argon2';
import crypto from 'crypto';

const SESSION_COOKIE_NAME = 'tt_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

const ip = request.headers.get('x-forwarded-for') ?? 'unknown';

await rateLimit({
	key: `login:${ip}`,
	limit: 5,
	windowMs: 60_000 // 5 per minute
});

export const POST = async ({ request, cookies }) => {
	const { email, password } = await request.json();

	if (!email || !password) {
		return json({ error: 'Missing email or password' }, { status: 400 });
	}

	// Find user
	const [user] = await db.select().from(users).where(eq(users.email, email));

	if (!user) {
		return json({ error: 'Invalid credentials' }, { status: 401 });
	}

	// Verify password
	const valid = await argon2.verify(user.passwordHash, password);

	if (!valid) {
		return json({ error: 'Invalid credentials' }, { status: 401 });
	}

	// Create session
	const sessionId = crypto.randomUUID();
	const expiresAt = new Date(Date.now() + SESSION_MAX_AGE * 1000);

	await db.insert(sessions).values({
		id: sessionId,
		userId: user.id,
		expiresAt
	});

	// Set cookie
	cookies.set(SESSION_COOKIE_NAME, sessionId, {
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		path: '/',
		maxAge: SESSION_MAX_AGE
	});

	return json({ ok: true });
};
