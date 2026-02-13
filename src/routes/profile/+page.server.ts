// profile/+page.server.ts
import { db } from '$lib/db';
import {
	recipes,
	favoriteRecipes,
	dontLikeRecipes,
	dietaryRestrictions,
	userDietaryRestrictions,
	users,
	authorApplications
} from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		requireUser(locals);

		const form = await request.formData();
		const name = form.get('name');
		const email = form.get('email');

		if (!name || !email) {
			return fail(400, { error: 'Missing fields' });
		}

		await db
			.update(users)
			.set({ name: String(name), email: String(email) })
			.where(eq(users.id, locals.user.id));

		return { success: true };
	},

	applyForAuthor: async ({ locals }) => {
		const user = locals.user;

		// Only users can apply
		if (user.role !== 'user') {
			return { error: 'You already have elevated permissions.' };
		}

		// Check if already applied
		const existing = await db
			.select()
			.from(authorApplications)
			.where(and(eq(authorApplications.userId, user.id), eq(authorApplications.status, 'pending')));

		if (existing.length > 0) {
			return { error: 'You already have a pending application.' };
		}

		await db.insert(authorApplications).values({
			userId: user.id
		});

		return { success: true };
	}
};

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

	const existing = await db
		.select()
		.from(authorApplications)
		.where(and(eq(authorApplications.userId, userId), eq(authorApplications.status, 'pending')));
	return { user: locals.user, hasPendingApplication: existing.length > 0 };
}
