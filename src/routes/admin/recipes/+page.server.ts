// src/routes/admin/recipes/+page.server.ts
import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';
import { requireEditor } from '$lib/db/auth';

export async function load({ locals }) {
	// 1. Protect the route
	requireEditor(locals);

	// 2. Load the data
	const all = await db.select().from(recipes);

	// 3. Return it to the page
	return { recipes: all };
}
