// <!-- // admin/recipes//[id]/+page.server.ts -->
import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';
import { requireEditor } from '$lib/db/auth';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export async function load({ locals, params }) {
	requireEditor(locals);

	const recipe = await db.select().from(recipes).where(eq(recipes.key_id, params.key_id)).limit(1);

	if (recipe.length === 0) {
		throw error(404, 'Recipe not found');
	}

	return { recipe: recipe[0] };
}

export const actions = {
	update: async ({ request, locals }) => {
		requireEditor(locals);

		const form = await request.formData();
		const key_id = Number(form.get('key_id'));
		const name = form.get('name');
		const servings = Number(form.get('servings'));
		const ingredients = (form.get('ingredients') as string)
			.split('\n')
			.map((s) => s.trim())
			.filter(Boolean);

		const instructions = (form.get('instructions') as string)
			.split('\n')
			.map((s) => s.trim())
			.filter(Boolean);

		const tags = (form.get('tags') as string)
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);

		const nutrition = form.get('nutrition');
		const time = Number(form.get('time'));
		const creator = form.get('creator');
		const category = form.get('category');

		await db
			.update(recipes)
			.set({
				name,
				servings,
				ingredients,
				instructions,
				tags,
				nutrition,
				time,
				creator,
				category
			})
			.where(eq(recipes.key_id, key_id));

		return { success: true };
	}
};
