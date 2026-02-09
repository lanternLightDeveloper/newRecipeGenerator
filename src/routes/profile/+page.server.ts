// profile/+page.server.ts
import { requireUser } from '$lib/db/auth';

export const load = ({ locals }) => {
	requireUser(locals);
	return { user: locals.user };
};
