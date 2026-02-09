// src/lib/auth/guards.ts
import { redirect, error } from '@sveltejs/kit';

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
