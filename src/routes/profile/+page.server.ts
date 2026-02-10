// profile/+page.server.ts
import { requireUser } from '$lib/db/auth';
import { db } from '$lib/db';
import { recipes, favoriteRecipes } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';

export async function load({ locals }) {
	requireUser(locals);

	const userId = locals.user.id;

	const favorites = await db
		.select({
			key_id: recipes.key_id,
			id: recipes.id,
			name: recipes.name,
			category: recipes.category,
			time: recipes.time
		})
		.from(favoriteRecipes)
		.innerJoin(recipes, eq(favoriteRecipes.recipeId, recipes.key_id))
		.where(eq(favoriteRecipes.userId, userId));

	return {
		user: locals.user,
		favorites
	};
}
