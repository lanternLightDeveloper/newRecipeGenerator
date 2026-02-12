// src/lib/auth.ts
import { redirect, error } from '@sveltejs/kit';

export function validateCSRF(request: Request, locals: App.Locals) {
	const token = request.headers.get('x-csrf-token');

	if (!token || token !== locals.csrfToken) {
		throw error(403, 'Invalid CSRF token');
	}
}

export function requireUser(locals) {
	if (!locals.user) throw redirect(302, '/login');
}

export function requireRole(locals, roles) {
	requireUser(locals);

	if (!roles.includes(locals.user.role)) {
		throw error(403, 'Forbidden');
	}
}

export function requireAdmin(locals) {
	requireRole(locals, ['admin']);
}

export function requireEditor(locals) {
	requireRole(locals, ['editor', 'admin']);
}

export function requireAuthor(locals) {
	requireRole(locals, ['author', 'editor', 'admin']);
}
