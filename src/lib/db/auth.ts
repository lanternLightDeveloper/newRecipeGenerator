import { redirect } from '@sveltejs/kit';

export function requireUser(locals: App.Locals) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}
	return locals.user;
}

export function requireAdmin(locals: App.Locals) {
	if (!locals.user || locals.user.role !== 'admin') {
		throw redirect(403, '/');
	}
	return locals.user;
}
