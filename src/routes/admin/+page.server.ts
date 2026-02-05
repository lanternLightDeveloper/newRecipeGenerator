import { requireAdmin } from '$lib/db/auth';

export const load = async ({ locals }) => {
	requireAdmin(locals);

	return {};
};
