import { json } from '@sveltejs/kit';
import { db } from '$lib/db/index';
import { users, password_resets } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

export const load = async ({ locals }) => {
	return { csrfToken: locals.csrfToken }; // expose CSRF
};

export const POST = async ({ request, locals }) => {
	const csrf = request.headers.get('x-csrf-token');
	if (!csrf || csrf !== locals.csrfToken) {
		return json({ error: 'Invalid CSRF token' }, { status: 403 });
	}

	const { email } = await request.json();
	if (!email) return json({ error: 'Email required' }, { status: 400 });

	const [user] = await db.select().from(users).where(eq(users.email, email));
	if (!user) return json({ ok: true }); // Do not leak existence

	const token = crypto.randomBytes(32).toString('hex');
	const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

	await db.insert(password_resets).values({
		id: crypto.randomUUID(),
		userId: user.id,
		token,
		expiresAt,
		used: 'false'
	});

	// Send email with token
	console.log(
		`Password reset link: https://lanternlightdevelopment.com/password-reset/confirm?token=${token}`
	);

	return json({ ok: true });
};
