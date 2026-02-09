// src/routes/admin/recipes/+page.server.ts

import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';

export async function load() {
	const all = await db.select().from(recipes);
	return { recipes: all };
}

import { requireEditor } from '$lib/db/auth';

export const load = ({ locals }) => {
	requireEditor(locals);
};
