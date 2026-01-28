import { error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (!locals.user.groups.includes('admin')) {
		throw error(403, 'Admins only');
	}

	return { user: locals.user };
};
