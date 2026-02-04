import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const headers = event.request.headers;

	const user = headers.get('x-authentik-username');

	event.locals.user = user
		? {
				username: user,
				email: headers.get('x-authentik-email'),
				name: headers.get('x-authentik-name'),
				groups: headers.get('x-authentik-groups')?.split(',') ?? []
			}
		: null;

	return resolve(event);
};
