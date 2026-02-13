// recipes/+page.server.ts

import { db } from '$lib/db';
import {
	recipes,
	favoriteRecipes,
	dontLikeRecipes,
	dietaryRestrictions,
	userDietaryRestrictions
} from '$lib/db/schema';
import { eq, and, sql } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';

export async function load({ locals }) {
	requireUser(locals);
	const userId = locals.user.id;

	// Load user restriction names
	let userRestrictions;
	try {
		userRestrictions = await db
			.select({ name: dietaryRestrictions.name })
			.from(userDietaryRestrictions)
			.innerJoin(
				dietaryRestrictions,
				eq(userDietaryRestrictions.restrictionId, dietaryRestrictions.id)
			)
			.where(eq(userDietaryRestrictions.userId, userId));
	} catch (err) {
		console.error('❌ ERROR loading user restrictions:', err);
		throw err;
	}
	const restrictionNames = userRestrictions.map((r) => r.name);

	// Load base recipe data
	let baseQuery;
	try {
		baseQuery = db
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
			);
	} catch (err) {
		console.error('❌ ERROR building baseQuery:', err);
		throw err;
	}

	// If user has no restrictions → return all recipes
	if (restrictionNames.length === 0) {
		const all = await baseQuery;
		return { recipes: all };
	}

	let filtered;
	try {
		filtered = await baseQuery.where(
			sql`COALESCE(${recipes.tags}, '{}'::text[]) && ${sql.raw(`'{${restrictionNames.join(',')}}'`)}::text[]`
		);
	} catch (err) {
		console.error('❌ ERROR filtering recipes:', err);
		console.error('❌ restrictionNames:', restrictionNames);
		throw err;
	}

	return { recipes: filtered };
}
