import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { favoriteRecipes } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';

export async function POST({ request, locals }) {
	requireUser(locals);

	const { recipeId } = await request.json();
	const userId = locals.user.id;

	// Check if exists
	const existing = await db
		.select()
		.from(favoriteRecipes)
		.where(and(eq(favoriteRecipes.userId, userId), eq(favoriteRecipes.recipeId, recipeId)));

	if (existing.length > 0) {
		// Remove
		await db.delete(favoriteRecipes).where(eq(favoriteRecipes.id, existing[0].id));

		return json({ status: 'removed' });
	}

	// Add
	await db.insert(favoriteRecipes).values({
		userId,
		recipeId
	});

	return json({ status: 'added' });
}
