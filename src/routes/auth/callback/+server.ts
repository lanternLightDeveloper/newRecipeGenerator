import { redirect, type RequestHandler } from '@sveltejs/kit';
import { Issuer } from 'openid-client';
import crypto from 'crypto';

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? 'tt_session';
const SESSION_SECRET = process.env.SESSION_SECRET!;

function signSession(payload: object) {
	const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
	const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
	return `${data}.${hmac}`;
}

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');
	if (!code) {
		throw redirect(302, '/login');
	}

	// Discover Authentik OIDC config
	const issuer = await Issuer.discover(process.env.AUTHENTIK_ISSUER!);
	const client = new issuer.Client({
		client_id: process.env.AUTHENTIK_CLIENT_ID!,
		client_secret: process.env.AUTHENTIK_CLIENT_SECRET!,
		redirect_uris: [process.env.AUTHENTIK_REDIRECT_URI!],
		response_types: ['code']
	});

	// Exchange code for tokens
	const params = { code, redirect_uri: process.env.AUTHENTIK_REDIRECT_URI! };
	const tokenSet = await client.callback(process.env.AUTHENTIK_REDIRECT_URI!, params, {});

	const claims = tokenSet.claims();

	// Build a minimal session object
	const session = {
		sub: claims.sub,
		name: claims.name ?? claims.preferred_username ?? null,
		email: claims.email ?? null
	};

	const signed = signSession(session);

	cookies.set(SESSION_COOKIE_NAME, signed, {
		httpOnly: true,
		secure: true,
		path: '/',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 7 // 7 days
	});

	throw redirect(302, '/profile');
};
