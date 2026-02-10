// src/routes/admin/recipes/+page.server.ts
import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';
import { requireEditor } from '$lib/db/auth';

export async function load({ locals }) {
	requireEditor(locals);

	const all = await db.select().from(recipes);

	return { recipes: all };
}
