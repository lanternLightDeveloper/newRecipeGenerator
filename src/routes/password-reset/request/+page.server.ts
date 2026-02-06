export const load = async ({ locals }) => {
	return { csrfToken: locals.csrfToken }; // expose CSRF
};
