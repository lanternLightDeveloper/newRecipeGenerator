import { redirect } from '@sveltejs/kit';

export function requireUser(locals: App.Locals) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}
	return locals.user;
}

export function requireAdmin(locals: App.Locals) {
	const user = requireUser(locals);

	if (user.role !== 'admin') {
		throw redirect(302, '/profile');
	}

	return user;
}
