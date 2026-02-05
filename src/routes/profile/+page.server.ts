import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login'); // or '/' if you want Auth redirect
	}

	return { user: locals.user };
};
