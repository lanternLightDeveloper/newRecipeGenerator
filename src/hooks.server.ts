import type { Handle } from '@sveltejs/kit';
import crypto from 'crypto';

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? 'tt_session';
const SESSION_SECRET = process.env.SESSION_SECRET!;

function verifySession(cookieValue: string | undefined) {
	if (!cookieValue) return null;

	const [data, sig] = cookieValue.split('.');
	if (!data || !sig) return null;

	const expected = crypto.createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
	if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;

	try {
		return JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
	} catch {
		return null;
	}
}

export const handle: Handle = async ({ event, resolve }) => {
	const raw = event.cookies.get(SESSION_COOKIE_NAME);
	const session = verifySession(raw);

	event.locals.user = session
		? {
				sub: session.sub,
				name: session.name,
				email: session.email
			}
		: null;

	return resolve(event);
};
