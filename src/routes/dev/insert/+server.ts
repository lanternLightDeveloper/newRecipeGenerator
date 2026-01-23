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
