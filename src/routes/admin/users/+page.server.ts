import { db } from '$lib/db';
import { users } from '$lib/db/schema';
import { requireAdmin } from '$lib/db/auth';

export async function load({ locals }) {
	// 1. Protect the route
	requireAdmin(locals);

	// 2. Load the data
	const all = await db.select().from(users);

	// 3. Return it to the page
	return { users: all };
}
