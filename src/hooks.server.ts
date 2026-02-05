// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/db/index';
import { users, sessions } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

const SESSION_COOKIE_NAME = 'tt_session';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(SESSION_COOKIE_NAME);

	if (!sessionId) {
		event.locals.user = null;
		return resolve(event);
	}

	const [row] = await db
		.select()
		.from(sessions)
		.join(users, eq(users.id, sessions.userId))
		.where(eq(sessions.id, sessionId));

	if (!row) {
		event.locals.user = null;
		return resolve(event);
	}

	event.locals.user = {
		id: row.userId,
		email: row.email,
		name: row.name
	};

	return resolve(event);
};
