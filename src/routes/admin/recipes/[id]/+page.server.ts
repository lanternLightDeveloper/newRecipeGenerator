// <!-- // +page.server.ts -->
import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';
import { requireEditor } from '$lib/db/auth';
import { eq } from 'drizzle-orm';

export async function load({ locals, params }) {
	requireEditor(locals);

	const recipe = await db
		.select()
		.from(recipes)
		.where(eq(recipes.id, Number(params.id)))
		.limit(1);

	if (recipe.length === 0) {
		throw error(404, 'Recipe not found');
	}

	return { recipe: recipe[0] };
}

export const actions = {
	update: async ({ request, locals }) => {
		requireEditor(locals);

		const form = await request.formData();
		const id = Number(form.get('id'));
		const name = form.get('name');
		const servings = Number(form.get('servings'));
		const ingredients = form.get('ingredients');
		const instructions = form.get('instructions');
		const tags = form.get('tags');
		const nutrition = form.get('nutrition');
		const time = Number(form.get('time'));
		const creator = form.get('creator');
		const category = form.get('category');

		await db
			.update(recipes)
			.set({ name, servings, ingredients, instructions, tags, nutrition, time, creator, category })
			.where(eq(recipes.id, id));

		return { success: true };
	}
};
