// /routes/api/dontLikes/toggle/+server.ts

import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { dontLikeRecipes } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser, validateCSRF } from '$lib/db/auth';

export async function POST({ request, locals }) {
	requireUser(locals);
	validateCSRF(request, locals);

	const { recipeId } = await request.json();
	const userId = locals.user.id;

	// Check if exists
	const existing = await db
		.select()
		.from(dontLikeRecipes)
		.where(and(eq(dontLikeRecipes.userId, userId), eq(dontLikeRecipes.recipeId, recipeId)));

	if (existing.length > 0) {
		// Remove
		await db.delete(dontLikeRecipes).where(eq(dontLikeRecipes.id, existing[0].id));

		return json({ status: 'removed' });
	}

	// Add
	await db.insert(dontLikeRecipes).values({
		userId,
		recipeId
	});

	return json({ status: 'added' });
}
