import { redirect } from '@sveltejs/kit';
import { generators } from 'openid-client';

export const GET = async () => {
	const state = generators.state();
	const url = new URL(process.env.AUTHENTIK_AUTHORIZE_URL);
	url.searchParams.set('client_id', process.env.AUTHENTIK_CLIENT_ID);
	url.searchParams.set('redirect_uri', process.env.AUTHENTIK_REDIRECT_URI);
	url.searchParams.set('response_type', 'code');
	url.searchParams.set('scope', 'openid profile email');
	url.searchParams.set('state', state);

	throw redirect(302, url.toString());
};
