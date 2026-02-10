import { db } from '$lib/db';
import { recipes, favoriteRecipes } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';

export async function load({ locals }) {
	requireUser(locals);

	const userId = locals.user.id;

	const all = await db
		.select({
			key_id: recipes.key_id,
			id: recipes.id,
			name: recipes.name,
			servings: recipes.servings,
			ingredients: recipes.ingredients,
			instructions: recipes.instructions,
			tags: recipes.tags,
			nutrition: recipes.nutrition,
			time: recipes.time,
			creator: recipes.creator,
			category: recipes.category,
			isFavorite: favoriteRecipes.id // null or number
		})
		.from(recipes)
		.leftJoin(
			favoriteRecipes,
			and(eq(favoriteRecipes.recipeId, recipes.key_id), eq(favoriteRecipes.userId, userId))
		)
		.leftJoin(
			dontLikeRecipes,
			and(eq(dontLikeRecipes.recipeId, recipes.key_id), eq(dontLikeRecipes.userId, userId))
		);

	return { recipes: all };
}
