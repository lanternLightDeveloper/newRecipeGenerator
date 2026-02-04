import { redirect, type RequestHandler } from '@sveltejs/kit';
import crypto from 'crypto';
import { jwtVerify, createRemoteJWKSet } from 'jose';

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME ?? 'tt_session';
const SESSION_SECRET = process.env.SESSION_SECRET!;

// Authentik endpoints
const TOKEN_URL = `${process.env.AUTHENTIK_ISSUER}token/`;
const JWKS_URL = `${process.env.AUTHENTIK_ISSUER}jwks/`;

function signSession(payload: object) {
	const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
	const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(data).digest('base64url');
	return `${data}.${hmac}`;
}

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');
	if (!code) throw redirect(302, '/login');

	// Exchange code for tokens
	const tokenRes = await fetch(TOKEN_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			code,
			redirect_uri: process.env.AUTHENTIK_REDIRECT_URI!,
			client_id: process.env.AUTHENTIK_CLIENT_ID!,
			client_secret: process.env.AUTHENTIK_CLIENT_SECRET!
		})
	});

	if (!tokenRes.ok) {
		console.error(await tokenRes.text());
		throw redirect(302, '/login');
	}

	const tokenSet = await tokenRes.json();
	const idToken = tokenSet.id_token;

	// Verify ID token
	const JWKS = createRemoteJWKSet(new URL(JWKS_URL));
	const { payload } = await jwtVerify(idToken, JWKS, {
		issuer: process.env.AUTHENTIK_ISSUER,
		audience: process.env.AUTHENTIK_CLIENT_ID
	});

	// Build session
	const session = {
		sub: payload.sub,
		name: payload.name ?? payload.preferred_username ?? null,
		email: payload.email ?? null
	};

	const signed = signSession(session);

	cookies.set(SESSION_COOKIE_NAME, signed, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		path: '/',
		sameSite: 'lax',
		maxAge: 60 * 60 * 24 * 7
	});

	throw redirect(302, '/profile');
};
