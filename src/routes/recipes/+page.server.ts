import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';

export async function load() {
	const all = await db.select().from(recipes);
	return { recipes: all };
}
