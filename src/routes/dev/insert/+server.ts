// import { db } from '$lib/db';
// import { recipes } from '$lib/db/schema';
// import { json } from '@sveltejs/kit';

// export async function GET() {
// 	const recipe = {
// 		name: 'Garlic Butter Chicken Thighs',
// 		servings: 4,
// 		ingredients: [
// 			'4 bone-in chicken thighs',
// 			'2 tbsp butter',
// 			'3 cloves garlic, minced',
// 			'½ tsp salt',
// 			'¼ tsp pepper',
// 			'1 tsp parsley flakes'
// 		],
// 		instructions: [
// 			'Preheat oven to 400°F (200°C).',
// 			'Season chicken with salt and pepper.',
// 			'In an oven-safe skillet, melt butter and sauté garlic until fragrant.',
// 			'Add chicken, skin-side down, and sear 3–4 minutes per side.',
// 			'Transfer skillet to oven and bake 20 minutes. Sprinkle with parsley before serving.'
// 		],
// 		tags: ['baked', 'buttery', 'savory', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
// 		nutrition: '310 calories, 24g fat, 0g carbs, 23g protein',
// 		time: 35
// 	};

// 	await db.insert(recipes).values(recipe);

// 	return json({ status: 'ok', inserted: recipe.name });
// }

// Working on bugs

//////////////////////////////
// src/routes/dev/import/+server.ts
import { db } from '$lib/db';
import { recipes } from '$lib/db/schema';
import { json } from '@sveltejs/kit';

import { BreakTater } from '$lib/data/BreakTater';
import { Eggs } from '$lib/data/Eggs';
import { ParfaitShakes } from '$lib/data/Parfait-Shakes';
import { Pancakes } from '$lib/data/Pancakes';
import { Starch } from '$lib/data/Starch';
import { Vegetables } from '$lib/data/Vegetables';
import { Sandwiches } from '$lib/data/Sandwiches';
import { Soups } from '$lib/data/Soups';
import { Mains } from '$lib/data/Mains';
import { Desserts } from '$lib/data/Desserts';

export async function GET() {
	const groups = [
		{ data: BreakTater, category: 'BreakTater' },
		{ data: Eggs, category: 'Eggs' },
		{ data: Pancakes, category: 'Pancakes' },
		{ data: Soups, category: 'Soup' },
		{ data: Sandwiches, category: 'Sandwich' },
		{ data: ParfaitShakes, category: 'Parfait-Shakes' },
		{ data: Starch, category: 'Starch' },
		{ data: Vegetables, category: 'Vegetables' },
		{ data: Mains, category: 'Mains' },
		{ data: Desserts, category: 'Dessert' }
	];

	let inserted = 0;

	for (const group of groups) {
		for (const recipe of group.data) {
			await db.insert(recipes).values({
				id: recipe.id,
				name: recipe.name,
				servings: Number(recipe.servings),
				ingredients: recipe.ingredients,
				instructions: recipe.instructions,
				tags: recipe.tags,
				nutrition: recipe.nutrition,
				time: recipe.time,
				creator: recipe.creator ?? 'Unknown',
				category: group.category
			});

			inserted++;
		}
	}

	return json({ status: 'ok', inserted });
}
