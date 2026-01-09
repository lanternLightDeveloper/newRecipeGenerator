// Current Recipe Count: 95

export const Mains: Recipe[] = [
	{
		id: 1,
		name: 'Garlic Butter Chicken Thighs',
		servings: '4',
		ingredients: [
			'4 bone-in chicken thighs',
			'2 tbsp butter',
			'3 cloves garlic, minced',
			'½ tsp salt',
			'¼ tsp pepper',
			'1 tsp parsley flakes'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Season chicken with salt and pepper.',
			'In an oven-safe skillet, melt butter and sauté garlic until fragrant.',
			'Add chicken, skin-side down, and sear 3–4 minutes per side.',
			'Transfer skillet to oven and bake 20 minutes. Sprinkle with parsley before serving.'
		],
		tags: ['baked', 'buttery', 'savory', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 24g fat, 0g carbs, 23g protein',
		time: 35
	},
	{
		id: 2,
		name: 'Honey Garlic Chicken Breasts',
		servings: '4',
		ingredients: [
			'4 boneless chicken breasts',
			'¼ cup honey',
			'3 tbsp soy sauce',
			'3 cloves garlic, minced',
			'1 tbsp olive oil',
			'¼ tsp pepper'
		],
		instructions: [
			'Whisk honey, soy sauce, and garlic in a bowl.',
			'Heat olive oil in skillet, add chicken, cook 6 minutes per side.',
			'Pour sauce over chicken and simmer 5 minutes until thickened.'
		],
		tags: ['stovetop', 'sweet-savory', 'quick', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 8g fat, 18g carbs, 36g protein',
		time: 25
	},
	{
		id: 3,
		name: 'Lemon Herb Roast Chicken',
		servings: '6',
		ingredients: [
			'1 whole chicken (4 lbs)',
			'2 tbsp olive oil',
			'1 lemon, halved',
			'2 sprigs rosemary',
			'1 tsp salt',
			'½ tsp pepper'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Rub chicken with olive oil, salt, and pepper.',
			'Stuff cavity with lemon halves and rosemary.',
			'Roast 1 hour 15 minutes or until juices run clear.'
		],
		tags: ['roasted', 'herbed', 'classic', 'main', 'gluten-free', 'economic', 'easy'],
		nutrition: '380 calories, 25g fat, 0g carbs, 38g protein',
		time: 90
	},
	{
		id: 4,
		name: 'Chicken Alfredo Pasta',
		servings: '4',
		ingredients: [
			'2 chicken breasts, sliced',
			'8 oz fettuccine pasta',
			'1 cup heavy cream',
			'¾ cup grated Parmesan',
			'2 tbsp butter',
			'2 cloves garlic, minced'
		],
		instructions: [
			'Cook pasta according to package directions.',
			'Sauté chicken in butter until golden, remove.',
			'Add garlic and cream, simmer 3 minutes.',
			'Stir in Parmesan until smooth, toss with pasta and chicken.'
		],
		tags: [
			'pasta',
			'creamy',
			'italian',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '640 calories, 32g fat, 45g carbs, 42g protein',
		time: 30
	},
	{
		id: 5,
		name: 'Crispy Baked Chicken Tenders',
		servings: '4',
		ingredients: [
			'1 lb chicken tenders',
			'1 cup breadcrumbs',
			'½ cup flour',
			'2 eggs, beaten',
			'½ tsp paprika',
			'½ tsp salt'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Dredge chicken in flour, egg, then breadcrumbs mixed with paprika and salt.',
			'Place on baking sheet and bake 18–20 minutes, flipping once.'
		],
		tags: ['baked', 'crispy', 'kid-friendly', 'main', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 9g fat, 22g carbs, 33g protein',
		time: 25
	},
	{
		id: 6,
		name: 'Spicy Chicken Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, sliced',
			'2 cups mixed vegetables',
			'2 tbsp soy sauce',
			'1 tbsp sriracha',
			'1 tbsp sesame oil',
			'1 tsp ginger, grated'
		],
		instructions: [
			'Heat sesame oil in wok, add chicken and cook 4 minutes.',
			'Add vegetables and cook 3 more minutes.',
			'Stir in soy sauce, sriracha, and ginger; cook 2 more minutes.'
		],
		tags: [
			'asian',
			'spicy',
			'quick',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '280 calories, 10g fat, 12g carbs, 32g protein',
		time: 20
	},
	{
		id: 7,
		name: 'BBQ Grilled Chicken',
		servings: '4',
		ingredients: [
			'4 chicken thighs or breasts',
			'½ cup barbecue sauce',
			'1 tbsp olive oil',
			'½ tsp garlic powder',
			'¼ tsp pepper'
		],
		instructions: [
			'Preheat grill to medium-high heat.',
			'Brush chicken with oil and seasonings.',
			'Grill 6–7 minutes per side, brushing with BBQ sauce until glazed.'
		],
		tags: ['grilled', 'bbq', 'summer', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '330 calories, 15g fat, 18g carbs, 34g protein',
		time: 25
	},
	{
		id: 8,
		name: 'Chicken Marsala',
		servings: '4',
		ingredients: [
			'4 chicken cutlets',
			'½ cup flour',
			'1 cup sliced mushrooms',
			'¾ cup Marsala wine',
			'2 tbsp butter',
			'1 tbsp olive oil'
		],
		instructions: [
			'Coat chicken in flour and sauté in butter and oil until golden.',
			'Remove chicken, add mushrooms, and cook 3 minutes.',
			'Pour in Marsala wine, simmer 5 minutes, return chicken to pan, and cook until sauce thickens.'
		],
		tags: ['italian', 'sautéed', 'wine sauce', 'main', 'fast'],
		nutrition: '420 calories, 22g fat, 14g carbs, 35g protein',
		time: 30
	},
	{
		id: 9,
		name: 'Thai Coconut Chicken Curry',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, cubed',
			'1 can (14 oz) coconut milk',
			'2 tbsp red curry paste',
			'1 tbsp fish sauce',
			'1 cup bell peppers, sliced',
			'1 tbsp oil'
		],
		instructions: [
			'Heat oil in skillet, add curry paste and cook 1 minute.',
			'Add chicken and cook until browned.',
			'Pour in coconut milk and fish sauce, simmer 10 minutes.',
			'Add bell peppers and cook until tender.'
		],
		tags: [
			'thai',
			'curry',
			'spicy',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '460 calories, 29g fat, 10g carbs, 38g protein',
		time: 25
	},
	{
		id: 10,
		name: 'Chicken and Rice Skillet',
		servings: '4',
		ingredients: [
			'1 lb chicken thighs, chopped',
			'1 cup long-grain rice',
			'2 cups chicken broth',
			'1 onion, diced',
			'1 tbsp olive oil',
			'½ tsp paprika'
		],
		instructions: [
			'Sauté onion and chicken in oil until lightly browned.',
			'Add rice, paprika, and broth; bring to a boil.',
			'Reduce heat, cover, and simmer 20 minutes until rice is cooked.'
		],
		tags: [
			'one-pan',
			'hearty',
			'comfort',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '390 calories, 14g fat, 32g carbs, 32g protein',
		time: 30
	},
	{
		id: 11,
		name: 'Kbbq Marinated Slow Cooker Chicken Wraps',
		servings: '4',
		ingredients: [
			'2 cups cooked shredded chicken',
			'¼ cup kbbq sauce',
			'4 tortillas',
			'¼ cup lettuce, shredded',
			'¼ cup cabbage, shredded',
			'¼ cup ranch dressing'
		],
		instructions: [
			'Toss shredded chicken in Kbbq sauce.',
			'Lay out tortillas and layer lettuce and cabbage, chicken, and ranch.',
			'Roll tightly.',
			'Place on hot skillet or frying pan for 3-4 minutes.',
			'Turn and cook another 3-4 minutes.',
			'Remove from heat and cut in half.'
		],
		tags: ['wrap', 'spicy', 'easy', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 12g fat, 25g carbs, 25g protein',
		time: 20
	},
	{
		id: 12,
		name: 'Creamy Tuscan Chicken',
		servings: '4',
		ingredients: [
			'4 chicken breasts',
			'½ cup sun-dried tomatoes',
			'1 cup heavy cream',
			'½ cup spinach, chopped',
			'2 tbsp olive oil',
			'1 tsp garlic powder'
		],
		instructions: [
			'Cook chicken in olive oil until golden, remove.',
			'Add cream, tomatoes, and garlic powder; simmer 3 minutes.',
			'Add spinach and return chicken to pan, simmer until sauce thickens.'
		],
		tags: ['creamy', 'italian', 'rich', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '480 calories, 30g fat, 10g carbs, 42g protein',
		time: 30
	},
	{
		id: 13,
		name: 'Chicken Fajitas',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, sliced',
			'1 red bell pepper, sliced',
			'1 onion, sliced',
			'1 tbsp olive oil',
			'1 tsp fajita seasoning'
		],
		instructions: [
			'Heat oil in skillet, add chicken and cook 5 minutes.',
			'Add peppers, onion, and seasoning; cook 5 more minutes until tender.'
		],
		tags: [
			'mexican',
			'quick',
			'stovetop',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '280 calories, 10g fat, 12g carbs, 34g protein',
		time: 15
	},
	{
		id: 14,
		name: 'Chicken Pot Pie',
		servings: '6',
		ingredients: [
			'2 cups cooked chicken, diced',
			'1 cup frozen mixed vegetables',
			'1 cup chicken broth',
			'1 cup milk',
			'¼ cup flour',
			'1 pie crust'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'In saucepan, whisk flour, broth, and milk to make sauce.',
			'Add chicken and vegetables, pour into crust, top with second crust, and bake 30 minutes.'
		],
		tags: ['baked', 'comfort', 'classic', 'main', 'vegetarian', 'economic'],
		nutrition: '430 calories, 22g fat, 34g carbs, 25g protein',
		time: 45
	},
	{
		id: 15,
		name: 'Teriyaki Chicken Bowls',
		servings: '4',
		ingredients: [
			'1 lb chicken thighs, cubed',
			'½ cup teriyaki sauce',
			'2 cups cooked white rice',
			'1 cup steamed broccoli',
			'1 tbsp sesame seeds'
		],
		instructions: [
			'Cook chicken in skillet until browned.',
			'Add teriyaki sauce and simmer 5 minutes.',
			'Serve over rice with broccoli and sprinkle sesame seeds on top.'
		],
		tags: [
			'asian',
			'sweet-savory',
			'bowl',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '480 calories, 15g fat, 52g carbs, 32g protein',
		time: 25
	},
	{
		id: 16,
		name: 'Classic Beef Lasagna',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'1 jar (24 oz) marinara sauce',
			'9 lasagna noodles',
			'2 cups ricotta cheese',
			'2 cups shredded mozzarella',
			'½ cup grated Parmesan',
			'1 egg',
			'1 tbsp olive oil',
			'½ tsp salt'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Cook noodles and set aside.',
			'Brown beef in olive oil, drain fat, and mix with marinara sauce.',
			'Combine ricotta, egg, and Parmesan in a bowl.',
			'Layer sauce, noodles, ricotta mix, and mozzarella in baking dish.',
			'Repeat layers and finish with mozzarella on top.',
			'Bake 40 minutes, rest 10 minutes before slicing.'
		],
		tags: [
			'italian',
			'baked',
			'pasta',
			'comfort',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'easy'
		],
		nutrition: '620 calories, 32g fat, 38g carbs, 42g protein',
		time: 60
	},
	{
		id: 17,
		name: 'Beef Stroganoff',
		servings: '4',
		ingredients: [
			'1 lb beef sirloin, sliced thin',
			'1 cup mushrooms, sliced',
			'½ onion, diced',
			'1 cup beef broth',
			'½ cup sour cream',
			'1 tbsp flour',
			'2 tbsp butter',
			'8 oz egg noodles'
		],
		instructions: [
			'Cook noodles according to package directions.',
			'Sauté beef in butter until browned; remove and set aside.',
			'Add onions and mushrooms, cook 5 minutes.',
			'Stir in flour, add broth, and simmer 5 minutes.',
			'Return beef to pan, stir in sour cream, and heat gently.',
			'Serve over noodles.'
		],
		tags: [
			'russian',
			'creamy',
			'comfort',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '540 calories, 27g fat, 36g carbs, 38g protein',
		time: 35
	},
	{
		id: 18,
		name: 'Classic Cheeseburger',
		servings: '4',
		ingredients: [
			'1 lb ground beef (80/20)',
			'4 hamburger buns',
			'4 slices cheddar cheese',
			'1 tomato, sliced',
			'4 lettuce leaves',
			'4 tbsp mayonnaise',
			'Salt and pepper to taste'
		],
		instructions: [
			'Form beef into 4 patties and season with salt and pepper.',
			'Grill or pan-fry 3–4 minutes per side.',
			'Top with cheese during final minute of cooking.',
			'Assemble burgers with lettuce, tomato, and mayonnaise.'
		],
		tags: ['grilled', 'american', 'classic', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '520 calories, 28g fat, 28g carbs, 34g protein',
		time: 20
	},
	{
		id: 19,
		name: 'Beef Tacos',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'1 packet taco seasoning',
			'8 small corn tortillas',
			'1 cup shredded lettuce',
			'1 cup diced tomatoes',
			'½ cup shredded cheddar',
			'¼ cup sour cream'
		],
		instructions: [
			'Brown ground beef in skillet; drain fat.',
			'Add taco seasoning and ½ cup water; simmer 5 minutes.',
			'Warm tortillas and fill with beef, lettuce, tomato, and cheese.',
			'Top with sour cream and serve.'
		],
		tags: ['mexican', 'quick', 'spicy', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '410 calories, 22g fat, 25g carbs, 29g protein',
		time: 20
	},
	{
		id: 20,
		name: 'Beef and Broccoli Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb flank steak, thinly sliced',
			'3 cups broccoli florets',
			'¼ cup soy sauce',
			'2 tbsp brown sugar',
			'2 cloves garlic, minced',
			'1 tbsp cornstarch',
			'1 tbsp sesame oil'
		],
		instructions: [
			'Whisk soy sauce, brown sugar, and cornstarch together.',
			'Sear beef in sesame oil until browned.',
			'Add broccoli and garlic, cook 3 minutes.',
			'Pour sauce over and simmer 3–5 minutes until thickened.'
		],
		tags: [
			'asian',
			'stir-fry',
			'quick',
			'main',
			'gluten-free',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '360 calories, 18g fat, 18g carbs, 32g protein',
		time: 25
	},
	{
		id: 21,
		name: 'Shepherd’s Pie',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'2 cups mashed potatoes',
			'1 cup frozen mixed vegetables',
			'1 tbsp tomato paste',
			'1 cup beef broth',
			'1 tbsp butter'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Brown beef, stir in tomato paste and broth, simmer 5 minutes.',
			'Add vegetables and cook until tender.',
			'Spread in baking dish, top with mashed potatoes.',
			'Bake 20 minutes until golden brown.'
		],
		tags: [
			'baked',
			'comfort',
			'casserole',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '430 calories, 23g fat, 28g carbs, 29g protein',
		time: 40
	},
	{
		id: 22,
		name: 'Beef Chili',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'1 can (15 oz) kidney beans, drained',
			'1 can (15 oz) diced tomatoes',
			'1 small onion, diced',
			'2 tbsp chili powder',
			'1 tsp cumin',
			'1 cup beef broth'
		],
		instructions: [
			'Brown beef with onion in large pot.',
			'Add tomatoes, beans, broth, and seasonings.',
			'Simmer 30 minutes, stirring occasionally.'
		],
		tags: ['spicy', 'hearty', 'one-pot', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '390 calories, 15g fat, 26g carbs, 32g protein',
		time: 40
	},
	{
		id: 23,
		name: 'Beef Enchiladas',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'8 corn tortillas',
			'1 cup enchilada sauce',
			'1 cup shredded cheddar',
			'½ onion, diced',
			'1 tbsp olive oil'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Sauté beef and onion until cooked, add ½ cup sauce.',
			'Fill tortillas with beef, roll up, and place seam-side down in dish.',
			'Pour remaining sauce on top, sprinkle with cheese, and bake 20 minutes.'
		],
		tags: [
			'mexican',
			'baked',
			'spicy',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '460 calories, 25g fat, 28g carbs, 32g protein',
		time: 30
	},
	{
		id: 24,
		name: 'Beef Meatballs with Marinara',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'¼ cup breadcrumbs',
			'1 egg',
			'1 clove garlic, minced',
			'2 cups marinara sauce',
			'2 tbsp Parmesan cheese'
		],
		instructions: [
			'Mix beef, breadcrumbs, egg, and garlic; form into 1-inch balls.',
			'Sear in skillet 2 minutes per side, add marinara sauce.',
			'Simmer 20 minutes until cooked through. Sprinkle with Parmesan before serving.'
		],
		tags: ['italian', 'simmered', 'comfort', 'main', 'economic', 'fast', 'easy'],
		nutrition: '420 calories, 26g fat, 10g carbs, 34g protein',
		time: 30
	},
	{
		id: 25,
		name: 'Korean Beef Bowls',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'¼ cup soy sauce',
			'2 tbsp brown sugar',
			'1 tbsp sesame oil',
			'2 cloves garlic, minced',
			'2 cups cooked rice'
		],
		instructions: [
			'Sauté beef in sesame oil until browned.',
			'Add garlic, soy sauce, and brown sugar; cook 3 minutes.',
			'Serve over rice and garnish with green onions.'
		],
		tags: ['asian', 'sweet-savory', 'quick', 'main', 'gluten-free', 'fast', 'easy'],
		nutrition: '430 calories, 17g fat, 38g carbs, 31g protein',
		time: 20
	},
	{
		id: 26,
		name: 'Beef Burrito Bowls',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'1 packet taco seasoning',
			'2 cups cooked rice',
			'1 cup black beans',
			'1 cup corn',
			'½ cup salsa'
		],
		instructions: [
			'Brown beef and add taco seasoning with ½ cup water.',
			'Layer bowls with rice, beef, beans, corn, and salsa.'
		],
		tags: [
			'mexican',
			'bowl',
			'easy',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '480 calories, 16g fat, 52g carbs, 32g protein',
		time: 20
	},
	{
		id: 27,
		name: 'Beef Stuffed Peppers',
		servings: '4',
		ingredients: [
			'4 bell peppers, tops removed and seeded',
			'1 lb ground beef',
			'1 cup cooked rice',
			'1 cup tomato sauce',
			'½ cup shredded mozzarella',
			'½ tsp oregano'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Cook beef and mix with rice, tomato sauce, and oregano.',
			'Fill peppers, top with cheese, and bake 30 minutes.'
		],
		tags: [
			'baked',
			'low-carb',
			'comfort',
			'main',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '420 calories, 21g fat, 22g carbs, 33g protein',
		time: 45
	},
	{
		id: 28,
		name: '  Mushroom & Swiss Burgers',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'½ cup finely chopped mushrooms',
			'½ tsp salt',
			'¼ tsp pepper',
			'4 burger buns',
			'4 slices Swiss cheese'
		],
		instructions: [
			'Mix beef, mushrooms, salt, and pepper; form 4 patties.',
			'Grill 4–5 minutes per side, top with cheese during last minute.',
			'Serve on buns with desired toppings.'
		],
		tags: ['burger', 'grilled', 'savory', 'main', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '480 calories, 25g fat, 28g carbs, 34g protein',
		time: 25
	},
	{
		id: 29,
		name: 'Beef Ramen Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'2 packs ramen noodles (no seasoning)',
			'1 cup mixed vegetables',
			'¼ cup soy sauce',
			'1 tbsp sesame oil',
			'1 tsp garlic powder'
		],
		instructions: [
			'Cook ramen noodles and set aside.',
			'Brown beef in sesame oil; add vegetables and soy sauce.',
			'Toss noodles with beef mixture and cook 2 minutes.'
		],
		tags: ['asian', 'noodle', 'quick', 'main', 'economic', 'fast', 'easy'],
		nutrition: '460 calories, 20g fat, 38g carbs, 33g protein',
		time: 20
	},
	{
		id: 30,
		name: 'Meatloaf',
		servings: '6',
		ingredients: [
			'1½ lbs ground beef',
			'1 cup breadcrumbs',
			'1 egg',
			'½ cup ketchup',
			'1 onion, minced',
			'1 tsp Worcestershire sauce'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Mix all ingredients and form into a loaf shape.',
			'Bake 45–50 minutes, brushing top with extra ketchup halfway through.',
			'Rest 10 minutes before slicing.'
		],
		tags: ['baked', 'classic', 'comfort', 'main', 'economic', 'easy'],
		nutrition: '480 calories, 27g fat, 22g carbs, 34g protein',
		time: 60
	},
	{
		id: 31,
		name: 'Garlic Butter Shrimp',
		servings: '4',
		ingredients: [
			'1 lb large shrimp, peeled and deveined',
			'4 tbsp butter',
			'4 cloves garlic, minced',
			'1 tbsp lemon juice',
			'¼ tsp red pepper flakes',
			'Salt and black pepper to taste',
			'2 tbsp chopped parsley'
		],
		instructions: [
			'Melt butter in a large skillet over medium heat.',
			'Add garlic and red pepper flakes, sauté 1 minute until fragrant.',
			'Add shrimp and cook 2–3 minutes per side until pink and opaque.',
			'Add lemon juice, season with salt and pepper, and toss with parsley.',
			'Serve immediately with rice or pasta.'
		],
		tags: ['shrimp', 'seafood', 'quick', 'garlic', 'dinner', 'gluten-free', 'fast', 'easy'],
		nutrition: '310 calories, 2g carbs, 22g fat, 24g protein',
		time: 20
	},
	{
		id: 32,
		name: 'Lemon Dill Baked Salmon',
		servings: '4',
		ingredients: [
			'4 salmon fillets (6 oz each)',
			'2 tbsp olive oil',
			'1 lemon, sliced',
			'2 tbsp fresh dill, chopped',
			'Salt and black pepper to taste'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Place salmon on a lined baking sheet, drizzle with olive oil.',
			'Top each fillet with lemon slices and sprinkle with dill, salt, and pepper.',
			'Bake 12–15 minutes or until flaky and tender.',
			'Serve warm with vegetables or rice.'
		],
		tags: ['salmon', 'healthy', 'baked', 'omega-3', 'quick', 'gluten-free', 'fast', 'easy'],
		nutrition: '365 calories, 0g carbs, 23g fat, 34g protein',
		time: 25
	},
	{
		id: 33,
		name: 'Seafood Paella',
		servings: '6',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'3 cloves garlic, minced',
			'1½ cups Arborio rice',
			'3 cups seafood stock',
			'½ cup white wine',
			'½ lb shrimp',
			'½ lb mussels',
			'½ lb squid rings',
			'1 tsp smoked paprika',
			'¼ tsp saffron threads',
			'Salt to taste',
			'Lemon wedges for serving'
		],
		instructions: [
			'Heat olive oil in a large skillet, add onion and garlic, cook 3 minutes.',
			'Add rice, paprika, and saffron; toast 2 minutes.',
			'Pour in wine and stock; simmer 15 minutes uncovered.',
			'Add seafood on top, cover, and cook another 10–12 minutes until rice and seafood are done.',
			'Serve with lemon wedges.'
		],
		tags: ['spanish', 'rice', 'seafood', 'one-pan', 'saffron', 'gluten-free', 'fast'],
		nutrition: '540 calories, 58g carbs, 18g fat, 30g protein',
		time: 45
	},
	{
		id: 34,
		name: 'Coconut Curry Shrimp',
		servings: '4',
		ingredients: [
			'1 lb shrimp, peeled and deveined',
			'1 tbsp coconut oil',
			'1 onion, diced',
			'2 cloves garlic, minced',
			'1 tbsp ginger, grated',
			'2 tbsp red curry paste',
			'1 can (13.5 oz) coconut milk',
			'1 tbsp fish sauce',
			'Juice of 1 lime',
			'Cilantro for garnish'
		],
		instructions: [
			'Heat coconut oil in a pan over medium heat.',
			'Sauté onion, garlic, and ginger until fragrant.',
			'Add curry paste and cook 1 minute.',
			'Pour in coconut milk and fish sauce, simmer 5 minutes.',
			'Add shrimp and cook until pink, about 4 minutes.',
			'Stir in lime juice and garnish with cilantro.'
		],
		tags: [
			'thai',
			'shrimp',
			'curry',
			'spicy',
			'coconut',
			'gluten-free',
			'vegetarian',
			'gluten-free',
			'fast'
		],
		nutrition: '420 calories, 10g carbs, 30g fat, 26g protein',
		time: 30
	},
	{
		id: 35,
		name: 'Fish Tacos with Lime Slaw',
		servings: '4',
		ingredients: [
			'1 lb white fish (cod or tilapia)',
			'2 tbsp olive oil',
			'1 tsp chili powder',
			'8 small corn tortillas',
			'2 cups shredded cabbage',
			'¼ cup mayonnaise',
			'2 tbsp lime juice',
			'¼ tsp salt',
			'Cilantro and lime wedges for serving'
		],
		instructions: [
			'Mix olive oil and chili powder, coat fish and cook in skillet 3–4 minutes per side.',
			'In a bowl, mix cabbage, mayo, lime juice, and salt for slaw.',
			'Warm tortillas and assemble tacos with fish, slaw, and cilantro.',
			'Serve with lime wedges.'
		],
		tags: [
			'mexican',
			'tacos',
			'fish',
			'fresh',
			'lime',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '385 calories, 30g carbs, 16g fat, 28g protein',
		time: 25
	},
	{
		id: 36,
		name: 'Baked Cod with Herb Crumbs',
		servings: '4',
		ingredients: [
			'4 cod fillets',
			'1 cup panko breadcrumbs',
			'2 tbsp parsley, chopped',
			'2 tbsp olive oil',
			'1 tsp lemon zest',
			'Salt and pepper to taste'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Mix panko, parsley, olive oil, and lemon zest.',
			'Place cod on baking sheet, season, and top with breadcrumb mixture.',
			'Bake 10–12 minutes until flaky and golden.'
		],
		tags: ['cod', 'baked', 'crispy', 'healthy', 'easy', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 10g carbs, 14g fat, 28g protein',
		time: 20
	},
	{
		id: 37,
		name: 'Tuna Steak with Sesame Crust',
		servings: '2',
		ingredients: [
			'2 tuna steaks (6 oz each)',
			'¼ cup sesame seeds',
			'2 tbsp soy sauce',
			'1 tbsp sesame oil',
			'1 tbsp olive oil'
		],
		instructions: [
			'Brush tuna with soy sauce, coat with sesame seeds.',
			'Heat sesame and olive oil in a skillet over high heat.',
			'Sear tuna 1–2 minutes per side for medium-rare.',
			'Serve immediately with rice or salad.'
		],
		tags: ['tuna', 'asian', 'quick', 'low-carb', 'grilled', 'gluten-free', 'economic', 'fast'],
		nutrition: '320 calories, 2g carbs, 20g fat, 32g protein',
		time: 15
	},
	{
		id: 38,
		name: 'Shrimp Scampi Pasta',
		servings: '4',
		ingredients: [
			'12 oz spaghetti',
			'1 lb shrimp, peeled and deveined',
			'4 tbsp butter',
			'3 cloves garlic, minced',
			'¼ cup white wine',
			'Juice of 1 lemon',
			'2 tbsp parsley, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook pasta according to package instructions.',
			'Melt butter in skillet, add garlic and cook 1 minute.',
			'Add shrimp, cook 3 minutes until pink.',
			'Pour in wine and lemon juice, toss with pasta and parsley.'
		],
		tags: [
			'italian',
			'pasta',
			'shrimp',
			'garlic',
			'quick',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '520 calories, 62g carbs, 16g fat, 28g protein',
		time: 25
	},
	{
		id: 39,
		name: 'Blackened Catfish',
		servings: '4',
		ingredients: [
			'4 catfish fillets',
			'2 tbsp butter, melted',
			'1 tbsp Cajun seasoning',
			'Lemon wedges for serving'
		],
		instructions: [
			'Brush catfish with butter and coat with Cajun seasoning.',
			'Cook in a hot skillet 3–4 minutes per side until blackened and cooked through.',
			'Serve with lemon wedges.'
		],
		tags: [
			'southern',
			'spicy',
			'catfish',
			'grilled',
			'quick',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '310 calories, 2g carbs, 22g fat, 26g protein',
		time: 20
	},
	{
		id: 40,
		name: 'Crab Cakes with Remoulade Sauce',
		servings: '4',
		ingredients: [
			'1 lb lump crab meat',
			'½ cup breadcrumbs',
			'¼ cup mayonnaise',
			'1 egg, beaten',
			'1 tsp Dijon mustard',
			'2 tbsp parsley, chopped',
			'1 tbsp lemon juice',
			'2 tbsp olive oil'
		],
		instructions: [
			'Mix crab, breadcrumbs, mayo, egg, mustard, parsley, and lemon juice.',
			'Form into patties and chill 15 minutes.',
			'Pan-fry in olive oil 3–4 minutes per side until golden.',
			'Serve with remoulade sauce or lemon wedges.'
		],
		tags: [
			'crab',
			'southern',
			'pan-fried',
			'crispy',
			'appetizer',
			'vegetarian',
			'gluten-free',
			'economic'
		],
		nutrition: '420 calories, 14g carbs, 28g fat, 26g protein',
		time: 30
	},
	{
		id: 41,
		name: 'Teriyaki Glazed Salmon',
		servings: '4',
		ingredients: [
			'4 salmon fillets',
			'⅓ cup soy sauce',
			'¼ cup honey',
			'1 tbsp rice vinegar',
			'1 tsp grated ginger',
			'1 tsp sesame oil'
		],
		instructions: [
			'Whisk soy sauce, honey, vinegar, ginger, and sesame oil for marinade.',
			'Marinate salmon 20 minutes.',
			'Cook in skillet 4–5 minutes per side, spooning glaze over top.',
			'Serve with rice and vegetables.'
		],
		tags: [
			'asian',
			'salmon',
			'glazed',
			'sweet-savory',
			'healthy',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '410 calories, 20g carbs, 22g fat, 32g protein',
		time: 30
	},
	{
		id: 42,
		name: 'Lobster Mac and Cheese',
		servings: '6',
		ingredients: [
			'8 oz elbow macaroni',
			'2 tbsp butter',
			'2 tbsp flour',
			'2 cups milk',
			'2 cups shredded cheddar',
			'1 cup cooked lobster meat, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook pasta and set aside.',
			'In saucepan, melt butter, whisk in flour, and slowly add milk.',
			'Stir in cheese until smooth, season with salt and pepper.',
			'Fold in lobster and pasta, bake 20 minutes at 375°F (190°C).'
		],
		tags: ['lobster', 'comfort food', 'cheesy', 'baked', 'rich', 'gluten-free', 'easy'],
		nutrition: '640 calories, 55g carbs, 32g fat, 35g protein',
		time: 45
	},
	{
		id: 43,
		name: 'Mussels in White Wine Sauce',
		servings: '4',
		ingredients: [
			'2 lbs mussels, cleaned',
			'2 tbsp butter',
			'2 cloves garlic, minced',
			'1 cup white wine',
			'¼ cup parsley, chopped',
			'1 tbsp lemon juice'
		],
		instructions: [
			'Melt butter in large pot, add garlic and sauté 1 minute.',
			'Add wine and mussels, cover and steam 5–7 minutes until shells open.',
			'Discard unopened mussels, stir in lemon juice and parsley.',
			'Serve with crusty bread.'
		],
		tags: [
			'french',
			'mussels',
			'wine',
			'buttery',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '390 calories, 9g carbs, 23g fat, 30g protein',
		time: 25
	},
	{
		id: 44,
		name: 'Clam Linguine',
		servings: '4',
		ingredients: [
			'12 oz linguine',
			'2 tbsp olive oil',
			'3 cloves garlic, minced',
			'1 can (10 oz) chopped clams with juice',
			'½ cup white wine',
			'2 tbsp parsley, chopped'
		],
		instructions: [
			'Cook linguine and reserve ½ cup pasta water.',
			'Sauté garlic in olive oil, add clams and wine, simmer 5 minutes.',
			'Toss in pasta and parsley, adding pasta water to loosen sauce.',
			'Serve with lemon wedges.'
		],
		tags: [
			'italian',
			'pasta',
			'clam',
			'seafood',
			'garlic',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '480 calories, 62g carbs, 12g fat, 26g protein',
		time: 30
	},
	{
		id: 45,
		name: 'Seared Scallops with Lemon Butter Sauce',
		servings: '2',
		ingredients: [
			'8 large sea scallops',
			'2 tbsp butter',
			'1 tbsp olive oil',
			'2 tbsp lemon juice',
			'Salt and pepper to taste'
		],
		instructions: [
			'Pat scallops dry and season.',
			'Heat oil and butter in skillet until sizzling.',
			'Sear scallops 2 minutes per side until golden.',
			'Remove scallops, stir lemon juice into pan drippings for sauce.',
			'Drizzle sauce over scallops and serve.'
		],
		tags: ['scallops', 'elegant', 'quick', 'buttery', 'date night', 'gluten-free', 'fast', 'easy'],
		nutrition: '330 calories, 4g carbs, 20g fat, 32g protein',
		time: 20
	},
	{
		id: 46,
		name: 'Fish and Chips',
		servings: '4',
		ingredients: [
			'4 cod fillets',
			'1 cup flour',
			'1 cup beer (or sparkling water)',
			'1 tsp baking powder',
			'Salt and pepper to taste',
			'Vegetable oil for frying',
			'4 cups potato fries'
		],
		instructions: [
			'Whisk flour, beer, baking powder, salt, and pepper for batter.',
			'Dip fish fillets and fry 4–5 minutes until golden and crisp.',
			'Drain on paper towels and serve with fries and tartar sauce.'
		],
		tags: ['british', 'fried', 'classic', 'crispy', 'comfort food', 'economic', 'fast', 'easy'],
		nutrition: '720 calories, 68g carbs, 36g fat, 34g protein',
		time: 40
	},
	{
		id: 47,
		name: 'Beef Wellington with Red Wine Reduction',
		servings: '4',
		ingredients: [
			'2 lbs beef tenderloin',
			'8 oz mushrooms, finely chopped',
			'4 slices prosciutto',
			'1 sheet puff pastry',
			'2 tbsp Dijon mustard',
			'1 egg, beaten',
			'1 cup red wine',
			'2 tbsp butter',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef on all sides and brush with Dijon mustard.',
			'Sauté mushrooms until dry, then cool.',
			'Wrap beef in prosciutto and mushroom duxelles, then puff pastry.',
			'Brush with egg wash and bake at 400°F (200°C) for 35 minutes.',
			'Simmer red wine with butter for sauce. Slice and serve with reduction.'
		],
		tags: ['beef', 'french', 'holiday', 'main', 'luxury', 'gluten-free', 'easy'],
		nutrition: '850 calories, 25g carbs, 45g fat, 60g protein',
		time: 90
	},
	{
		id: 48,
		name: 'Lobster Thermidor',
		servings: '2',
		ingredients: [
			'2 lobsters, cooked and halved',
			'2 tbsp butter',
			'2 tbsp flour',
			'½ cup heavy cream',
			'¼ cup dry white wine',
			'1 tsp Dijon mustard',
			'¼ cup grated Gruyère cheese',
			'1 tbsp parsley'
		],
		instructions: [
			'Remove lobster meat, chop, and set aside.',
			'Make roux with butter and flour, whisk in cream and wine.',
			'Add mustard and cheese, then fold in lobster meat.',
			'Spoon mixture into shells, sprinkle cheese, and broil until golden.'
		],
		tags: ['seafood', 'french', 'elegant', 'main', 'gluten-free'],
		nutrition: '720 calories, 12g carbs, 48g fat, 55g protein',
		time: 60
	},
	{
		id: 49,
		name: 'Duck à l’Orange',
		servings: '4',
		ingredients: [
			'1 whole duck (4–5 lbs)',
			'1 cup orange juice',
			'2 tbsp sugar',
			'¼ cup vinegar',
			'1 cup chicken stock',
			'Zest of 1 orange',
			'2 tbsp Grand Marnier',
			'Salt and pepper'
		],
		instructions: [
			'Roast duck at 375°F (190°C) for 1½ hours until crispy.',
			'Caramelize sugar with vinegar, add orange juice and stock.',
			'Reduce, then add Grand Marnier and zest.',
			'Slice duck and drizzle orange sauce over top.'
		],
		tags: ['duck', 'french', 'classic', 'main', 'holiday', 'gluten-free'],
		nutrition: '880 calories, 15g carbs, 65g fat, 55g protein',
		time: 120
	},
	{
		id: 50,
		name: 'Seared Scallops with Saffron Cream',
		servings: '4',
		ingredients: [
			'12 sea scallops',
			'2 tbsp olive oil',
			'1 shallot, minced',
			'½ cup white wine',
			'1 cup heavy cream',
			'¼ tsp saffron threads',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear scallops 2 minutes per side, then set aside.',
			'Sauté shallots, deglaze with wine, and reduce.',
			'Add cream and saffron, simmer until thick.',
			'Plate scallops with saffron cream drizzled on top.'
		],
		tags: ['seafood', 'gourmet', 'fine dining', 'main', 'gluten-free', 'fast'],
		nutrition: '600 calories, 10g carbs, 45g fat, 32g protein',
		time: 35
	},
	{
		id: 51,
		name: 'Rack of Lamb with Rosemary Jus',
		servings: '4',
		ingredients: [
			'2 racks of lamb, frenched',
			'2 tbsp olive oil',
			'2 tbsp Dijon mustard',
			'2 tbsp fresh rosemary, chopped',
			'1 cup beef stock',
			'2 tbsp red wine',
			'Salt and pepper'
		],
		instructions: [
			'Season and sear lamb, then roast at 400°F (200°C) for 25 minutes.',
			'Simmer stock, wine, and rosemary for jus.',
			'Slice lamb and drizzle rosemary jus before serving.'
		],
		tags: ['lamb', 'french', 'holiday', 'main', 'gluten-free'],
		nutrition: '780 calories, 5g carbs, 55g fat, 60g protein',
		time: 60
	},
	{
		id: 52,
		name: 'Broccoli Stir-Fry with Sesame',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'1 tbsp sesame oil',
			'1 tbsp soy sauce',
			'1 tsp minced ginger',
			'1 tsp sesame seeds'
		],
		instructions: [
			'Heat sesame oil in a pan, add ginger and cook 30 seconds.',
			'Add broccoli and 2 tbsp water, stir-fry 4–5 minutes.',
			'Add soy sauce and sesame seeds, toss and serve.'
		],
		tags: [
			'asian',
			'quick',
			'vegan',
			'stir-fry',
			'vegatarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '100 calories, 6g fat, 8g carbs, 4g protein',
		time: 10
	},
	{
		id: 53,
		name: 'Filet Mignon with mushrooms and Madeira Sauce',
		servings: '2',
		ingredients: [
			'2 filet mignon steaks',
			'1 cup sliced mushrooms(best from the farmers market)',
			'½ cup Madeira wine',
			'½ cup waygu stock',
			'2 tbsp butter',
			'Salt and pepper'
		],
		instructions: [
			'Sear steaks 3 minutes per side, remove.',
			'Saute mushrooms in butter, add salt and pepper. Remove at al dente',
			'Deglaze pan with Madeira, add stock, reduce by half.',
			'Serve steak topped with foie gras and drizzle sauce.'
		],
		tags: ['beef', 'luxury', 'fine dining', 'main'],
		nutrition: '950 calories, 8g carbs, 70g fat, 65g protein',
		time: 40
	},
	{
		id: 54,
		name: 'Lobster Ravioli in Champagne Cream Sauce',
		servings: '4',
		ingredients: [
			'1 lb lobster meat, chopped',
			'1 package fresh pasta sheets',
			'½ cup ricotta cheese',
			'½ cup Champagne',
			'1 cup heavy cream',
			'2 tbsp butter',
			'1 egg'
		],
		instructions: [
			'Combine lobster and ricotta for filling.',
			'Fill ravioli and seal with egg wash.',
			'Sauté in butter, add Champagne and cream to make sauce.',
			'Toss ravioli in sauce and serve.'
		],
		tags: ['pasta', 'seafood', 'italian', 'fine dining'],
		nutrition: '780 calories, 55g carbs, 42g fat, 38g protein',
		time: 60
	},
	{
		id: 55,
		name: 'Wild Mushroom and Waygu Ragù with Pappardelle',
		servings: '4',
		ingredients: [
			'1 lb Waygu shoulder, diced',
			'8 oz wild mushrooms, sliced',
			'1 onion, diced',
			'½ cup red wine',
			'1 cup beef stock',
			'12 oz pappardelle',
			'2 tbsp butter'
		],
		instructions: [
			'Sear Waygu, add onion and mushrooms, cook until browned.',
			'Deglaze with wine, add stock, and simmer 1 hour.',
			'Toss cooked pasta with ragù and butter, then serve.'
		],
		tags: ['italian', 'Waygu', 'pasta', 'fine dining', 'gluten-free'],
		nutrition: '720 calories, 65g carbs, 28g fat, 40g protein',
		time: 90
	},
	{
		id: 56,
		name: 'Sea Bass en Papillote',
		servings: '2',
		ingredients: [
			'2 sea bass fillets',
			'1 lemon, sliced',
			'1 zucchini, julienned',
			'1 carrot, julienned',
			'2 tbsp olive oil',
			'Salt and pepper',
			'Fresh thyme sprigs'
		],
		instructions: [
			'Place fish and vegetables on parchment paper.',
			'Drizzle with oil, season, and top with lemon and thyme.',
			'Fold packet and bake at 375°F (190°C) for 20 minutes.',
			'Serve in parchment for presentation.'
		],
		tags: ['seafood', 'healthy', 'french', 'fine dining', 'fast', 'easy'],
		nutrition: '420 calories, 12g carbs, 24g fat, 35g protein',
		time: 35
	},
	{
		id: 57,
		name: 'Osso Buco alla Milanese',
		servings: '4',
		ingredients: [
			'4 waygu steaks',
			'1 onion, diced',
			'2 carrots, diced',
			'1 cup white wine',
			'1½ cups beef broth',
			'1 can diced tomatoes',
			'2 tbsp olive oil',
			'Gremolata (lemon zest, garlic, parsley)'
		],
		instructions: [
			'Brown waygu in oil, remove.',
			'Sauté vegetables, deglaze with wine.',
			'Add broth and tomatoes, return veal, and simmer 1½ hours.',
			'Top with gremolata and serve with risotto.'
		],
		tags: ['italian', 'veal', 'stew', 'fine dining'],
		nutrition: '640 calories, 22g carbs, 38g fat, 52g protein',
		time: 120
	},
	{
		id: 58,
		name: 'Black Cod with Miso Glaze',
		servings: '2',
		ingredients: [
			'2 black cod fillets',
			'3 tbsp white miso paste',
			'2 tbsp mirin',
			'2 tbsp sake',
			'1 tbsp sugar'
		],
		instructions: [
			'Mix miso, mirin, sake, and sugar for marinade.',
			'Marinate fish overnight.',
			'Broil or bake at 425°F (220°C) for 10–12 minutes until caramelized.',
			'Serve with steamed vegetables.'
		],
		tags: [
			'japanese',
			'seafood',
			'fine dining',
			'main',
			'vegetarian',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '510 calories, 14g carbs, 32g fat, 38g protein',
		time: 45
	},
	{
		id: 59,
		name: 'Herb-Crusted Venison Loin with Blackberry Reduction',
		servings: '4',
		ingredients: [
			'1½ lbs venison loin',
			'2 tbsp Dijon mustard',
			'1 cup breadcrumbs',
			'2 tbsp mixed herbs (rosemary, thyme, parsley)',
			'1 cup blackberries',
			'½ cup red wine',
			'1 tbsp honey'
		],
		instructions: [
			'Coat venison with mustard and herb crumbs, roast at 400°F (200°C) for 25 minutes.',
			'Simmer blackberries with wine and honey until thick.',
			'Slice venison and drizzle reduction over top.'
		],
		tags: ['game', 'fine dining', 'european', 'main', 'gluten-free', 'easy'],
		nutrition: '690 calories, 22g carbs, 32g fat, 58g protein',
		time: 60
	},
	{
		id: 60,
		name: 'Chilean Sea Bass with Champagne Beurre Blanc',
		servings: '4',
		ingredients: [
			'4 sea bass fillets',
			'1 cup Champagne',
			'1 shallot, minced',
			'½ cup butter, cold and cubed',
			'Salt and pepper',
			'Lemon wedges for garnish'
		],
		instructions: [
			'Reduce Champagne and shallots in a pan until nearly dry.',
			'Whisk in cold butter to form sauce.',
			'Pan-sear sea bass until golden and flaky.',
			'Serve with Champagne sauce and lemon.'
		],
		tags: ['seafood', 'french', 'luxury', 'fine dining', 'gluten-free', 'economic', 'fast'],
		nutrition: '520 calories, 5g carbs, 34g fat, 45g protein',
		time: 40
	},
	{
		id: 61,
		name: 'Coq au Vin Blanc',
		servings: '4',
		ingredients: [
			'4 chicken thighs and legs',
			'1 cup dry white wine',
			'1 cup chicken broth',
			'1 onion, diced',
			'1 cup mushrooms, sliced',
			'2 tbsp butter',
			'1 tbsp flour'
		],
		instructions: [
			'Brown chicken, then sauté vegetables.',
			'Add flour, then deglaze with wine and broth.',
			'Simmer until chicken is tender and sauce thickens.',
			'Serve with parsley garnish.'
		],
		tags: ['french', 'chicken', 'classic', 'fine dining'],
		nutrition: '630 calories, 14g carbs, 38g fat, 55g protein',
		time: 75
	},
	{
		id: 62,
		name: 'Porcini-Crusted Filet Mignon with Port Reduction',
		servings: '2',
		ingredients: [
			'2 filet mignon steaks',
			'2 tbsp dried porcini powder',
			'½ cup port wine',
			'¼ cup beef stock',
			'2 tbsp butter',
			'Salt and pepper'
		],
		instructions: [
			'Rub steaks with porcini powder and sear to desired doneness.',
			'Deglaze with port and stock, reduce by half.',
			'Add butter to finish sauce and drizzle over steaks.'
		],
		tags: ['beef', 'fine dining', 'luxury', 'main'],
		nutrition: '890 calories, 10g carbs, 62g fat, 70g protein',
		time: 45
	},
	{
		id: 63,
		name: 'Broccoli Rice Casserole',
		servings: '6',
		ingredients: [
			'3 cups cooked rice',
			'3 cups chopped broccoli',
			'1 1/2 cups of carrots',
			'1 can (10 oz) cream of mushroom soup',
			'1 cup shredded cheddar cheese',
			'½ cup milk',
			'¼ tsp garlic powder'
		],
		instructions: [
			'Preheat oven to 350°F (175°C).',
			'Mix rice, broccoli, carrots, soup, milk, cheese, and garlic powder.',
			'Pour into casserole dish and bake 25 minutes until bubbly.'
		],
		tags: [
			'baked',
			'rice',
			'comfort food',
			'side',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '280 calories, 15g fat, 25g carbs, 10g protein',
		time: 35
	},
	{
		id: 64,
		name: 'Vegetable Stir-Fry with Tofu',
		servings: '4',
		ingredients: [
			'1 block firm tofu, cubed',
			'2 cups broccoli florets',
			'1 red bell pepper, sliced',
			'1 cup snap peas',
			'2 tbsp soy sauce',
			'1 tbsp sesame oil',
			'1 tsp cornstarch',
			'2 tbsp water',
			'1 clove garlic, minced'
		],
		instructions: [
			'Whisk soy sauce, cornstarch, and water in a bowl.',
			'Sauté tofu in sesame oil until golden.',
			'Add garlic and vegetables, cook 5–7 minutes.',
			'Pour in sauce and stir until thickened.'
		],
		tags: ['stir-fry', 'tofu', 'quick', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '260 calories, 12g fat, 18g carbs, 20g protein',
		time: 25
	},
	{
		id: 65,
		name: 'Chickpea and Spinach Curry',
		servings: '4',
		ingredients: [
			'1 can chickpeas, drained',
			'2 cups fresh spinach',
			'1 onion, diced',
			'2 cloves garlic, minced',
			'1 tbsp curry powder',
			'1 can (14 oz) diced tomatoes',
			'1 cup coconut milk'
		],
		instructions: [
			'Sauté onion and garlic until soft.',
			'Add curry powder and stir for 30 seconds.',
			'Add tomatoes, chickpeas, and coconut milk; simmer 15 minutes.',
			'Stir in spinach until wilted.'
		],
		tags: ['curry', 'chickpea', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy', 'one-pot'],
		nutrition: '310 calories, 14g fat, 30g carbs, 12g protein',
		time: 30
	},
	{
		id: 66,
		name: 'Vegetable Quesadillas',
		servings: '4',
		ingredients: [
			'4 large flour tortillas',
			'1 cup shredded cheese',
			'1 red bell pepper, sliced',
			'1 zucchini, sliced',
			'½ onion, sliced',
			'1 tbsp olive oil'
		],
		instructions: [
			'Sauté vegetables until tender.',
			'Place on half of each tortilla with cheese.',
			'Fold and cook in skillet until golden on both sides.'
		],
		tags: ['mexican', 'cheese', 'quick', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '320 calories, 18g fat, 28g carbs, 12g protein',
		time: 20
	},
	{
		id: 67,
		name: 'Stuffed Bell Peppers',
		servings: '4',
		ingredients: [
			'4 bell peppers, tops removed',
			'1 cup cooked quinoa or rice',
			'1 can black beans, drained',
			'1 cup corn kernels',
			'½ cup salsa',
			'1 cup shredded cheese'
		],
		instructions: [
			'Mix quinoa, beans, corn, salsa, and cheese.',
			'Stuff into peppers and bake at 375°F for 25–30 minutes.'
		],
		tags: ['baked', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 9g fat, 38g carbs, 12g protein',
		time: 40
	},
	{
		id: 68,
		name: 'Creamy Tomato Pasta',
		servings: '4',
		ingredients: [
			'12 oz pasta',
			'1 can (15 oz) tomato sauce',
			'½ cup heavy cream',
			'2 cloves garlic, minced',
			'1 tbsp olive oil',
			'½ tsp dried basil'
		],
		instructions: [
			'Cook pasta according to package directions.',
			'Sauté garlic in olive oil, then add tomato sauce and basil.',
			'Stir in cream and simmer 5 minutes. Toss with pasta.'
		],
		tags: ['pasta', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '380 calories, 14g fat, 50g carbs, 10g protein',
		time: 25
	},
	{
		id: 69,
		name: 'Vegetable Fried Rice',
		servings: '4',
		ingredients: [
			'3 cups cooked rice',
			'1 cup mixed vegetables',
			'2 eggs, lightly beaten',
			'2 tbsp soy sauce',
			'1 tbsp sesame oil',
			'1 green onion, chopped'
		],
		instructions: [
			'Heat oil in skillet and scramble eggs.',
			'Add vegetables and rice; stir-fry 5 minutes.',
			'Add soy sauce and mix well.'
		],
		tags: ['rice', 'stir-fry', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 10g fat, 45g carbs, 10g protein',
		time: 20
	},
	{
		id: 70,
		name: 'Black Bean Tacos',
		servings: '4',
		ingredients: [
			'1 can black beans, drained',
			'1 tsp cumin',
			'1 tsp chili powder',
			'8 small tortillas',
			'½ cup shredded lettuce',
			'½ cup salsa',
			'½ cup cheese'
		],
		instructions: [
			'Mash beans with cumin and chili powder.',
			'Warm tortillas and fill with bean mixture, lettuce, salsa, and cheese.'
		],
		tags: ['mexican', 'taco', 'quick', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '270 calories, 9g fat, 35g carbs, 11g protein',
		time: 20
	},
	{
		id: 71,
		name: 'Spinach and Ricotta Stuffed Shells',
		servings: '4',
		ingredients: [
			'12 jumbo pasta shells',
			'1 cup ricotta cheese',
			'1 cup spinach, chopped',
			'1 cup marinara sauce',
			'½ cup mozzarella cheese'
		],
		instructions: [
			'Preheat oven to 375°F.',
			'Cook shells, then fill with ricotta and spinach.',
			'Spread marinara in baking dish, add shells, top with mozzarella, and bake 25 minutes.'
		],
		tags: ['pasta', 'baked', 'italian', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '340 calories, 12g fat, 42g carbs, 14g protein',
		time: 40
	},
	{
		id: 72,
		name: 'Vegetarian Chili',
		servings: '6',
		ingredients: [
			'1 can kidney beans',
			'1 can black beans',
			'1 can corn',
			'1 can diced tomatoes',
			'1 onion, diced',
			'2 tbsp chili powder'
		],
		instructions: [
			'Sauté onion, then add all ingredients.',
			'Simmer 30 minutes until thick and hearty.'
		],
		tags: ['chili', 'one-pot', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '280 calories, 5g fat, 48g carbs, 12g protein',
		time: 40
	},
	{
		id: 73,
		name: 'Caprese Stuffed Portobellos',
		servings: '4',
		ingredients: [
			'4 large portobello mushrooms',
			'1 cup cherry tomatoes, halved',
			'1 cup mozzarella balls',
			'2 tbsp balsamic glaze',
			'1 tbsp olive oil'
		],
		instructions: [
			'Brush mushrooms with olive oil and bake 10 minutes.',
			'Top with tomatoes and mozzarella, return to oven for 5 minutes.',
			'Drizzle with balsamic glaze before serving.'
		],
		tags: ['baked', 'mushroom', 'italian', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '230 calories, 13g fat, 10g carbs, 14g protein',
		time: 25
	},
	{
		id: 74,
		name: 'Sweet Potato and Black Bean Enchiladas',
		servings: '6',
		ingredients: [
			'2 cups cooked sweet potatoes, mashed',
			'1 can black beans',
			'8 corn tortillas',
			'1 cup enchilada sauce',
			'1 cup shredded cheese'
		],
		instructions: [
			'Mix sweet potatoes and beans, roll into tortillas, and place in baking dish.',
			'Top with enchilada sauce and cheese; bake at 375°F for 25 minutes.'
		],
		tags: ['baked', 'mexican', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 9g fat, 48g carbs, 11g protein',
		time: 40
	},
	{
		id: 75,
		name: 'Vegetable Frittata',
		servings: '4',
		ingredients: [
			'6 eggs',
			'1 cup spinach',
			'½ cup diced bell peppers',
			'½ cup shredded cheese',
			'¼ cup milk',
			'1 tbsp olive oil'
		],
		instructions: [
			'Whisk eggs, milk, and cheese.',
			'Sauté vegetables in olive oil, then pour egg mixture over.',
			'Cook on stovetop 5 minutes, then bake at 375°F for 10 minutes until set.'
		],
		tags: ['eggs', 'baked', 'breakfast', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 20g fat, 6g carbs, 20g protein',
		time: 25
	},
	{
		id: 76,
		name: 'Mushroom and Carrot Stroganoff',
		servings: '4',
		ingredients: [
			'12 oz mushrooms, sliced',
			'1 cup carrots, diced',
			'1 onion, diced',
			'1 cup sour cream',
			'2 tbsp flour',
			'2 cups vegetable broth',
			'2 tsp paprika',
			'8 oz egg noodles'
		],
		instructions: [
			'Cook noodles according to package.',
			'Sauté onion and mushrooms until browned.',
			'Add flour and paprika, then broth. Simmer until thickened.',
			'Stir in sour cream and serve over noodles.'
		],
		tags: [
			'pasta',
			'mushroom',
			'comfort food',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '400 calories, 14g fat, 50g carbs, 15g protein',
		time: 35
	},
	{
		id: 77,
		name: 'Wild Mushroom Risotto with Truffle Oil',
		servings: '4',
		ingredients: [
			'1 ½ cups Arborio rice',
			'4 cups vegetable broth',
			'1 cup white wine',
			'1 tbsp truffle oil',
			'2 cups mixed wild mushrooms, sliced',
			'1 shallot, minced',
			'½ cup grated Parmesan cheese',
			'2 tbsp butter',
			'1 tbsp olive oil'
		],
		instructions: [
			'Sauté shallot and mushrooms in olive oil until softened.',
			'Add Arborio rice and toast 2 minutes.',
			'Add white wine and cook until absorbed.',
			'Gradually add broth, stirring constantly until creamy.',
			'Stir in butter, Parmesan, and drizzle with truffle oil before serving.'
		],
		tags: ['risotto', 'italian', 'fancy', 'vegetarian', 'gourmet', 'vegetarian', 'gluten-free'],
		nutrition: '460 calories, 17g fat, 55g carbs, 12g protein',
		time: 50
	},
	{
		id: 78,
		name: 'Butternut Squash Ravioli with Sage Brown Butter',
		servings: '4',
		ingredients: [
			'12 oz fresh butternut squash ravioli',
			'4 tbsp butter',
			'6 fresh sage leaves',
			'2 tbsp grated Parmesan',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook ravioli in salted water until tender.',
			'Melt butter in a skillet until golden brown; add sage leaves.',
			'Toss ravioli in sage butter and top with Parmesan.'
		],
		tags: ['italian', 'pasta', 'fancy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '410 calories, 18g fat, 48g carbs, 12g protein',
		time: 25
	},
	{
		id: 79,
		name: 'Eggplant Napoleon with Ricotta and Tomato Coulis',
		servings: '4',
		ingredients: [
			'1 large eggplant, sliced into rounds',
			'1 cup ricotta cheese',
			'1 cup tomato coulis or sauce',
			'½ cup grated Parmesan',
			'¼ cup olive oil',
			'Fresh basil leaves for garnish'
		],
		instructions: [
			'Brush eggplant slices with olive oil and roast until tender.',
			'Layer eggplant, ricotta, and tomato coulis into stacks.',
			'Top with Parmesan and bake 10 minutes; garnish with basil.'
		],
		tags: [
			'eggplant',
			'italian',
			'baked',
			'fancy',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast'
		],
		nutrition: '320 calories, 20g fat, 18g carbs, 16g protein',
		time: 40
	},
	{
		id: 80,
		name: 'Beetroot Wellington with Goat Cheese and Spinach',
		servings: '4',
		ingredients: [
			'2 large beets, roasted and peeled',
			'1 sheet puff pastry',
			'½ cup goat cheese',
			'1 cup spinach, sautéed',
			'1 egg, beaten for wash'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Roll puff pastry and layer spinach, goat cheese, and roasted beets.',
			'Wrap and seal edges, brush with egg wash.',
			'Bake 25–30 minutes until golden brown.'
		],
		tags: ['fancy', 'baked', 'vegetarian', 'wellington', 'holiday'],
		nutrition: '420 calories, 22g fat, 38g carbs, 12g protein',
		time: 50
	},
	{
		id: 81,
		name: 'Cauliflower Steak with Romesco Sauce',
		servings: '2',
		ingredients: [
			'1 large cauliflower, sliced into thick steaks',
			'2 tbsp olive oil',
			'½ cup romesco sauce',
			'Salt and pepper to taste',
			'Fresh parsley for garnish'
		],
		instructions: [
			'Brush cauliflower with olive oil and season.',
			'Roast at 425°F (220°C) for 25 minutes until golden.',
			'Serve with romesco sauce and garnish with parsley.'
		],
		tags: ['vegan', 'fancy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '230 calories, 16g fat, 18g carbs, 5g protein',
		time: 30
	},
	{
		id: 82,
		name: 'Spinach and Feta Stuffed Phyllo Pie',
		servings: '6',
		ingredients: [
			'10 sheets phyllo dough',
			'10 oz spinach, chopped',
			'½ cup crumbled feta cheese',
			'2 tbsp olive oil',
			'1 small onion, diced',
			'2 tbsp butter, melted'
		],
		instructions: [
			'Sauté onion and spinach until wilted; mix with feta.',
			'Layer phyllo with butter, adding filling in center.',
			'Fold and bake at 375°F (190°C) for 30 minutes until crisp and golden.'
		],
		tags: ['greek', 'baked', 'fancy', 'vegetarian', 'fast'],
		nutrition: '340 calories, 20g fat, 30g carbs, 10g protein',
		time: 45
	},
	{
		id: 83,
		name: 'Ricotta Gnocchi with Lemon Cream Sauce',
		servings: '4',
		ingredients: [
			'1 cup ricotta cheese',
			'½ cup flour',
			'1 egg',
			'1 lemon, zested and juiced',
			'½ cup heavy cream',
			'¼ cup grated Parmesan'
		],
		instructions: [
			'Mix ricotta, flour, and egg to form dough; shape into gnocchi.',
			'Boil until they float.',
			'Simmer cream with lemon zest and juice; toss gnocchi and top with Parmesan.'
		],
		tags: ['italian', 'pasta', 'fancy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '390 calories, 18g fat, 42g carbs, 14g protein',
		time: 35
	},
	{
		id: 84,
		name: 'Grilled Polenta with Wild Mushroom Ragù',
		servings: '4',
		ingredients: [
			'2 cups cooked polenta, cooled and sliced',
			'2 cups mixed mushrooms, chopped',
			'1 shallot, minced',
			'1 tbsp olive oil',
			'1 tbsp butter',
			'¼ cup white wine'
		],
		instructions: [
			'Sauté shallot and mushrooms in olive oil and butter until soft.',
			'Deglaze with wine and simmer to reduce.',
			'Grill polenta slices and top with mushroom ragù.'
		],
		tags: ['fancy', 'italian', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '330 calories, 14g fat, 36g carbs, 10g protein',
		time: 40
	},
	{
		id: 85,
		name: 'Caramelized Onion and Gruyère Tart',
		servings: '6',
		ingredients: [
			'1 sheet puff pastry',
			'2 large onions, thinly sliced',
			'1 cup shredded Gruyère cheese',
			'1 tbsp butter',
			'1 tsp thyme leaves'
		],
		instructions: [
			'Cook onions slowly in butter until caramelized.',
			'Spread on puff pastry, top with cheese and thyme.',
			'Bake at 400°F for 20 minutes until golden and flaky.'
		],
		tags: ['baked', 'fancy', 'tart', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '380 calories, 23g fat, 30g carbs, 9g protein',
		time: 45
	},
	{
		id: 86,
		name: 'Ratatouille Tower with Herb Oil',
		servings: '4',
		ingredients: [
			'1 zucchini, thinly sliced',
			'1 eggplant, thinly sliced',
			'1 yellow squash, thinly sliced',
			'1 red bell pepper, thinly sliced',
			'2 tbsp olive oil',
			'1 tsp herbs de Provence'
		],
		instructions: [
			'Layer vegetables vertically in a baking dish.',
			'Drizzle with olive oil and herbs.',
			'Bake at 375°F (190°C) for 35–40 minutes until tender.',
			'Drizzle with herb oil before serving.'
		],
		tags: ['french', 'baked', 'fancy', 'vegan', 'vegetarian', 'gluten-free', 'economic'],
		nutrition: '220 calories, 14g fat, 18g carbs, 4g protein',
		time: 50
	},
	{
		id: 87,
		name: 'Asparagus and Lemon Risotto',
		servings: '4',
		ingredients: [
			'1 ½ cups Arborio rice',
			'4 cups vegetable broth',
			'1 bunch asparagus, chopped',
			'1 shallot, minced',
			'½ cup white wine',
			'½ cup Parmesan cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Sauté shallot and asparagus in butter.',
			'Add rice and cook 1–2 minutes.',
			'Add wine and cook until absorbed, then gradually add broth until creamy.',
			'Stir in Parmesan before serving.'
		],
		tags: ['risotto', 'italian', 'fancy', 'spring', 'vegetarian', 'gluten-free', 'economic'],
		nutrition: '420 calories, 15g fat, 55g carbs, 12g protein',
		time: 45
	},
	{
		id: 88,
		name: 'Stuffed Zucchini Boats with Quinoa and Feta',
		servings: '4',
		ingredients: [
			'2 large zucchinis, halved and hollowed',
			'1 cup cooked quinoa',
			'½ cup crumbled feta',
			'1 tomato, diced',
			'1 tbsp olive oil',
			'½ tsp oregano'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Mix quinoa, tomato, feta, and oregano.',
			'Stuff zucchini halves and drizzle with olive oil.',
			'Bake 25–30 minutes until tender.'
		],
		tags: [
			'baked',
			'fancy',
			'mediterranean',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '310 calories, 14g fat, 30g carbs, 12g protein',
		time: 40
	},
	{
		id: 89,
		name: 'Cauliflower and Gruyère Soufflé',
		servings: '4',
		ingredients: [
			'2 cups cauliflower florets, steamed',
			'3 tbsp butter',
			'3 tbsp flour',
			'1 cup milk',
			'½ cup grated Gruyère cheese',
			'3 eggs, separated'
		],
		instructions: [
			'Make a roux with butter and flour, then whisk in milk to make béchamel.',
			'Add cheese and mashed cauliflower.',
			'Fold in beaten egg whites gently and bake at 375°F (190°C) for 25–30 minutes.'
		],
		tags: ['french', 'souffle', 'baked', 'fancy', 'vegetarian'],
		nutrition: '290 calories, 18g fat, 16g carbs, 14g protein',
		time: 50
	},
	{
		id: 90,
		name: 'Mushroom and Spinach Crêpes with Mornay Sauce',
		servings: '4',
		ingredients: [
			'8 savory crêpes',
			'2 cups spinach',
			'1 cup mushrooms, sliced',
			'1 cup Mornay sauce (cheese béchamel)',
			'1 tbsp butter'
		],
		instructions: [
			'Sauté mushrooms and spinach in butter.',
			'Fill crêpes with mixture and fold.',
			'Top with Mornay sauce and bake 10 minutes until warmed through.'
		],
		tags: ['french', 'fancy', 'crepe', 'vegetarian', 'economic', 'fast', 'easy'],
		nutrition: '360 calories, 19g fat, 32g carbs, 13g protein',
		time: 40
	},
	{
		id: 91,
		name: 'Pumpkin and Sage Lasagna',
		servings: '6',
		ingredients: [
			'9 lasagna noodles',
			'2 cups pumpkin purée',
			'2 cups ricotta cheese',
			'½ cup Parmesan cheese',
			'½ tsp ground nutmeg',
			'1 tbsp fresh sage, chopped'
		],
		instructions: [
			'Layer noodles with pumpkin, ricotta, and Parmesan.',
			'Sprinkle with sage and nutmeg.',
			'Bake at 375°F (190°C) for 35–40 minutes until golden and bubbly.'
		],
		tags: [
			'italian',
			'baked',
			'lasagna',
			'fancy',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '410 calories, 18g fat, 45g carbs, 17g protein',
		time: 55
	},
	{
		id: 92,
		name: 'Roasted Vegetable Galette with Herbed Goat Cheese',
		servings: '6',
		ingredients: [
			'1 sheet pie crust or puff pastry',
			'1 cup assorted roasted vegetables',
			'½ cup herbed goat cheese',
			'1 egg, beaten for wash'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Spread goat cheese on crust, top with roasted vegetables.',
			'Fold edges and brush with egg wash.',
			'Bake 30–35 minutes until golden brown.'
		],
		tags: ['baked', 'fancy', 'tart', 'gourmet', 'vegetarian', 'economic', 'fast', 'easy'],
		nutrition: '370 calories, 21g fat, 32g carbs, 10g protein',
		time: 45
	},
	{
		id: 93,
		name: 'Artichoke and Spinach Stuffed Shells with Cream Sauce',
		servings: '4',
		ingredients: [
			'12 jumbo pasta shells',
			'1 cup ricotta cheese',
			'½ cup chopped spinach',
			'½ cup chopped artichokes',
			'1 cup cream sauce',
			'½ cup Parmesan cheese'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Stuff shells with ricotta, spinach, and artichokes.',
			'Top with cream sauce and Parmesan, bake 25 minutes.'
		],
		tags: ['pasta', 'fancy', 'baked', 'vegetarian', 'gluten-free', 'economic', 'fast'],
		nutrition: '420 calories, 19g fat, 45g carbs, 18g protein',
		time: 45
	},
	{
		id: 94,
		name: 'Grilled Halloumi with Pesto and Roasted Vegetables',
		servings: '4',
		ingredients: [
			'8 oz halloumi cheese, sliced',
			'1 zucchini, sliced',
			'1 bell pepper, sliced',
			'2 tbsp pesto',
			'1 tbsp olive oil'
		],
		instructions: [
			'Toss vegetables in olive oil and roast until tender.',
			'Grill halloumi until golden on both sides.',
			'Serve with vegetables and drizzle with pesto.'
		],
		tags: [
			'grilled',
			'fancy',
			'mediterranean',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '360 calories, 24g fat, 10g carbs, 22g protein',
		time: 30
	},
	{
		id: 95,
		name: 'Truffle Mac and Cheese with Crispy Shallots',
		servings: '6',
		ingredients: [
			'12 oz macaroni',
			'3 tbsp butter',
			'3 tbsp flour',
			'2 cups milk',
			'1 cup shredded Gruyère cheese',
			'1 tbsp truffle oil',
			'½ cup crispy fried shallots'
		],
		instructions: [
			'Cook pasta until al dente.',
			'Make a roux with butter and flour; whisk in milk until thickened.',
			'Add cheese and truffle oil; mix with pasta.',
			'Top with crispy shallots before serving.'
		],
		tags: ['pasta', 'comfort food', 'fancy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '540 calories, 28g fat, 48g carbs, 19g protein',
		time: 40
	},
	{
		id: 96,
		name: 'Lentil Shepherd’s Pie',
		servings: '6',
		ingredients: [
			'2 cups cooked lentils',
			'1 onion, diced',
			'1 cup carrots, diced',
			'1 cup peas',
			'2 cups mashed potatoes',
			'1 tbsp tomato paste',
			'1 cup vegetable broth'
		],
		instructions: [
			'Sauté onion and carrots, then add lentils, tomato paste, and broth.',
			'Simmer 10 minutes; stir in peas.',
			'Spread in baking dish, top with mashed potatoes, and bake at 375°F for 25 minutes.'
		],
		tags: ['baked', 'comfort food', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '350 calories, 8g fat, 55g carbs, 16g protein',
		time: 45
	}
];
