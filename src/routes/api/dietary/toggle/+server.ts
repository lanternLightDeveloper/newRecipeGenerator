import { json } from '@sveltejs/kit';
import { db } from '$lib/db';
import { userDietaryRestrictions } from '$lib/db/schema';
import { eq, and } from 'drizzle-orm';
import { requireUser } from '$lib/db/auth';

export async function POST({ request, locals }) {
	requireUser(locals);

	const { restrictionId } = await request.json();
	const userId = locals.user.id;

	// Check if exists
	const existing = await db
		.select()
		.from(userDietaryRestrictions)
		.where(
			and(
				eq(userDietaryRestrictions.userId, userId),
				eq(userDietaryRestrictions.restrictionId, restrictionId)
			)
		);

	if (existing.length > 0) {
		// Remove
		await db.delete(userDietaryRestrictions).where(eq(userDietaryRestrictions.id, existing[0].id));

		return json({ status: 'removed' });
	}

	// Add
	await db.insert(userDietaryRestrictions).values({
		userId,
		restrictionId
	});

	return json({ status: 'added' });
}
