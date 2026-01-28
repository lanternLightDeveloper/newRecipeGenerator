export const handle = async ({ event, resolve }) => {
	const user = event.request.headers.get('remote-user');
	const groups = event.request.headers.get('remote-groups')?.split(',') ?? [];

	event.locals.user = user ? { name: user, groups } : null;

	return resolve(event);
};
