import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { users } from '$lib/server/schema';
import { eq } from 'drizzle-orm';
import argon2 from 'argon2';
import crypto from 'crypto';

export const POST = async ({ request }) => {
	const { email, password, name } = await request.json();

	if (!email || !password) {
		return json({ error: 'Missing email or password' }, { status: 400 });
	}

	// Check if user already exists
	const existing = await db.select().from(users).where(eq(users.email, email)).limit(1);

	if (existing.length > 0) {
		return json({ error: 'User already exists' }, { status: 400 });
	}

	const passwordHash = await argon2.hash(password);

	await db.insert(users).values({
		id: crypto.randomUUID(),
		email,
		passwordHash,
		name
	});

	return json({ ok: true });
};
