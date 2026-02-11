// profile/+page.server.ts
import { db } from '$lib/db';
import {
	recipes,
	favoriteRecipes,
	dontLikeRecipes,
	dietaryRestrictions,
	userDietaryRestrictions
} from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';

export async function load({ locals }) {
	requireUser(locals);
	const userId = locals.user.id;

	// Load all restriction types
	const allRestrictions = await db.select().from(dietaryRestrictions);

	// Load user's selected restrictions
	const userRestrictions = await db
		.select({
			restrictionId: userDietaryRestrictions.restrictionId
		})
		.from(userDietaryRestrictions)
		.where(eq(userDietaryRestrictions.userId, userId));

	// Load favorite recipes
	const favorites = await db
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
			isFavorite: favoriteRecipes.id,
			isDontLike: dontLikeRecipes.id
		})
		.from(recipes)
		.leftJoin(
			favoriteRecipes,
			and(eq(favoriteRecipes.recipeId, recipes.key_id), eq(favoriteRecipes.userId, userId))
		)
		.leftJoin(
			dontLikeRecipes,
			and(eq(dontLikeRecipes.recipeId, recipes.key_id), eq(dontLikeRecipes.userId, userId))
		)
		.where(eq(favoriteRecipes.userId, userId)); // only favorites

	return {
		user: locals.user,
		allRestrictions,
		userRestrictions,
		favorites
	};
}
