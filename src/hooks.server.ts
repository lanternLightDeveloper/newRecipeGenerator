// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/db/index';
import { users, sessions } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

// const SESSION_COOKIE_NAME = 'tt_session';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('tt_session');

	if (!sessionId) {
		event.locals.user = null;
		return resolve(event);
	}

	const result = await db
		.select({
			userId: users.id,
			email: users.email,
			name: users.name,
			expiresAt: sessions.expiresAt
		})
		.from(sessions)
		.innerJoin(users, eq(users.id, sessions.userId))
		.where(eq(sessions.id, sessionId))
		.limit(1);

	if (result.length === 0) {
		event.locals.user = null;
		return resolve(event);
	}

	const session = result[0];

	if (session.expiresAt < new Date()) {
		event.locals.user = null;
		return resolve(event);
	}

	event.locals.user = {
		id: session.userId,
		email: session.email,
		name: session.name
	};

	return resolve(event);
};
