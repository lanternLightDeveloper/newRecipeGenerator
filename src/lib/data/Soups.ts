// Current Recipe Count: 65

export const Soups: Recipe[] = [
	{
		id: 1,
		name: 'Classic Chicken Noodle Soup',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 carrots, sliced',
			'2 celery stalks, sliced',
			'8 cups chicken broth',
			'2 cups cooked shredded chicken',
			'1½ cups egg noodles',
			'Salt and pepper to taste',
			'Fresh parsley for garnish'
		],
		instructions: [
			'Sauté onion, carrots, and celery in olive oil until softened.',
			'Add broth and bring to a boil.',
			'Add noodles and cook until tender.',
			'Stir in chicken, season, and simmer for 5 minutes. Garnish with parsley.'
		],
		tags: ['soup', 'broth', 'chicken', 'comfort food', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '320 calories, 8g fat, 30g carbs, 28g protein',
		time: 35
	},
	{
		id: 2,
		name: 'Miso Soup',
		servings: '2',
		ingredients: [
			'3 cups dashi broth',
			'2 tbsp miso paste',
			'½ cup cubed tofu',
			'2 green onions, sliced',
			'¼ cup wakame seaweed'
		],
		instructions: [
			'Heat dashi to a gentle simmer.',
			'Whisk in miso paste until dissolved (do not boil).',
			'Add tofu and wakame, simmer 2–3 minutes.',
			'Top with green onions before serving.'
		],
		tags: ['soup', 'broth', 'japanese', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '120 calories, 4g fat, 10g carbs, 10g protein',
		time: 15
	},
	{
		id: 3,
		name: 'Beef and Barley Soup',
		servings: '4',
		ingredients: [
			'1 lb beef stew meat, cubed',
			'1 tbsp olive oil',
			'1 onion, chopped',
			'2 carrots, diced',
			'8 cups beef broth',
			'½ cup pearl barley',
			'1 bay leaf',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef in olive oil until browned, remove and set aside.',
			'Sauté onion and carrots, then add broth, barley, and bay leaf.',
			'Return beef to pot and simmer 1 hour until tender.',
			'Season to taste and serve.'
		],
		tags: ['soup', 'broth', 'beef', 'hearty', 'economic', 'easy'],
		nutrition: '390 calories, 14g fat, 32g carbs, 32g protein',
		time: 75
	},
	{
		id: 4,
		name: 'Vegetable Broth Soup',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, chopped',
			'2 carrots, sliced',
			'2 celery stalks, sliced',
			'1 zucchini, diced',
			'8 cups vegetable broth',
			'1 cup green beans, chopped',
			'1 tsp dried thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion, carrots, and celery until softened.',
			'Add remaining vegetables, broth, and thyme.',
			'Simmer 20 minutes until tender. Season and serve.'
		],
		tags: ['soup', 'broth', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '150 calories, 5g fat, 22g carbs, 4g protein',
		time: 30
	},
	{
		id: 5,
		name: 'Pho Ga (Vietnamese Chicken Pho)',
		servings: '4',
		ingredients: [
			'8 cups chicken broth',
			'2 star anise pods',
			'1 cinnamon stick',
			'2 cloves',
			'1-inch piece ginger, sliced',
			'2 tbsp fish sauce',
			'2 cups cooked shredded chicken',
			'8 oz rice noodles',
			'Fresh herbs, lime wedges, and chili for garnish'
		],
		instructions: [
			'Simmer broth with spices and ginger for 20 minutes.',
			'Strain, then add fish sauce and chicken.',
			'Cook rice noodles separately, then serve in bowls with broth and toppings.'
		],
		tags: ['soup', 'broth', 'chicken', 'vietnamese', 'gluten-free', 'economic', 'easy'],
		nutrition: '370 calories, 8g fat, 45g carbs, 30g protein',
		time: 40
	},
	{
		id: 6,
		name: 'Hot and Sour Soup',
		servings: '4',
		ingredients: [
			'6 cups chicken or vegetable broth',
			'½ cup sliced mushrooms',
			'¼ cup bamboo shoots',
			'2 tbsp soy sauce',
			'2 tbsp rice vinegar',
			'1 tsp chili paste',
			'1 egg, lightly beaten',
			'2 tbsp cornstarch mixed with 2 tbsp water'
		],
		instructions: [
			'Bring broth, mushrooms, bamboo shoots, soy sauce, vinegar, and chili paste to a boil.',
			'Add cornstarch slurry to thicken slightly.',
			'Drizzle in egg while stirring to form ribbons.',
			'Serve hot.'
		],
		tags: ['soup', 'asian', 'broth', 'spicy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '160 calories, 6g fat, 14g carbs, 10g protein',
		time: 25
	},
	{
		id: 7,
		name: 'Italian Wedding Soup',
		servings: '4',
		ingredients: [
			'8 cups chicken broth',
			'½ lb small meatballs',
			'1 cup small pasta (orzo or acini di pepe)',
			'2 cups spinach, chopped',
			'1 egg, whisked with 2 tbsp parmesan'
		],
		instructions: [
			'Simmer meatballs in broth until cooked through.',
			'Add pasta and cook until tender.',
			'Stir in spinach and egg mixture, simmer briefly, then serve.'
		],
		tags: ['soup', 'broth', 'italian', 'meatballs', 'economic', 'easy'],
		nutrition: '420 calories, 18g fat, 36g carbs, 28g protein',
		time: 40
	},
	{
		id: 8,
		name: 'Tom Yum Soup',
		servings: '4',
		ingredients: [
			'6 cups chicken broth',
			'2 stalks lemongrass, smashed',
			'3 kaffir lime leaves',
			'1-inch galangal, sliced',
			'1 cup mushrooms',
			'½ lb shrimp, peeled',
			'2 tbsp fish sauce',
			'1 tbsp lime juice',
			'1–2 Thai chilies, sliced'
		],
		instructions: [
			'Simmer broth with lemongrass, lime leaves, and galangal for 10 minutes.',
			'Add mushrooms and shrimp, cook until shrimp turn pink.',
			'Stir in fish sauce, lime juice, and chilies before serving.'
		],
		tags: ['soup', 'thai', 'broth', 'spicy', 'gluten-free', 'fast', 'easy'],
		nutrition: '190 calories, 5g fat, 10g carbs, 26g protein',
		time: 25
	},
	{
		id: 9,
		name: 'Matzo Ball Soup',
		servings: '4',
		ingredients: [
			'8 cups chicken or vegtable broth',
			'1 onion, halved',
			'2 carrots, sliced',
			'2 celery stalks, sliced',
			'4 matzo balls (prepared or homemade)'
		],
		instructions: [
			'Simmer broth with vegetables until tender.',
			'Add matzo balls and cook for 15–20 minutes.',
			'Remove onion halves and serve hot.'
		],
		tags: [
			'soup',
			'broth',
			'jewish',
			'comfort food',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '310 calories, 9g fat, 42g carbs, 18g protein',
		time: 40
	},
	{
		id: 10,
		name: 'Udon Soup with Vegetables',
		servings: '2',
		ingredients: [
			'4 cups vegetable broth',
			'2 tbsp soy sauce',
			'1 tbsp mirin',
			'1 cup mushrooms',
			'½ cup shredded carrots',
			'2 cups cooked udon noodles',
			'Green onions and sesame seeds for garnish'
		],
		instructions: [
			'Bring broth, soy sauce, and mirin to a simmer.',
			'Add mushrooms and carrots; cook until tender.',
			'Add noodles and heat through. Garnish with green onions.'
		],
		tags: ['soup', 'broth', 'japanese', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '340 calories, 7g fat, 58g carbs, 10g protein',
		time: 20
	},
	{
		id: 11,
		name: 'Cabbage Soup',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'½ head cabbage, chopped',
			'8 cups vegetable broth',
			'1 can diced tomatoes',
			'1 tsp paprika',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic until fragrant.',
			'Add cabbage, broth, tomatoes, and paprika.',
			'Simmer for 30 minutes until tender. Season and serve.'
		],
		tags: ['soup', 'broth', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '140 calories, 4g fat, 20g carbs, 5g protein',
		time: 35
	},
	{
		id: 12,
		name: 'Beef Pho (Pho Bo)',
		servings: '4',
		ingredients: [
			'8 cups beef broth',
			'1 cinnamon stick',
			'2 star anise',
			'2 cloves',
			'1-inch ginger, sliced',
			'8 oz rice noodles',
			'½ lb thinly sliced beef sirloin',
			'Fresh herbs, bean sprouts, lime, and chili for garnish'
		],
		instructions: [
			'Simmer broth with spices and ginger for 25 minutes.',
			'Strain, then pour hot broth over cooked noodles and raw beef slices.',
			'Top with herbs and lime.'
		],
		tags: ['soup', 'vietnamese', 'broth', 'beef', 'gluten-free', 'gluten-free', 'economic', 'easy'],
		nutrition: '410 calories, 10g fat, 45g carbs, 32g protein',
		time: 45
	},
	{
		id: 13,
		name: 'Clear Mushroom Soup',
		servings: '3',
		ingredients: [
			'4 cups vegetable broth',
			'2 cups assorted mushrooms, sliced',
			'1 garlic clove, minced',
			'1 tbsp soy sauce',
			'1 tsp sesame oil',
			'Green onions for garnish'
		],
		instructions: [
			'Bring broth, garlic, and soy sauce to a simmer.',
			'Add mushrooms and cook 10 minutes.',
			'Drizzle with sesame oil and garnish with green onions.'
		],
		tags: [
			'soup',
			'vegetarian',
			'broth',
			'gluten-free',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '110 calories, 4g fat, 10g carbs, 6g protein',
		time: 20
	},
	{
		id: 14,
		name: 'Wonton Soup',
		servings: '4',
		ingredients: [
			'6 cups chicken broth',
			'12 pork wontons',
			'2 cups baby bok choy',
			'1 tbsp soy sauce',
			'1 tsp sesame oil',
			'Sliced green onions for garnish'
		],
		instructions: [
			'Bring broth and soy sauce to a boil.',
			'Add wontons and cook until they float.',
			'Add bok choy and cook briefly, then drizzle sesame oil and serve.'
		],
		tags: ['soup', 'chinese', 'broth', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '280 calories, 9g fat, 28g carbs, 20g protein',
		time: 25
	},
	{
		id: 15,
		name: 'Lentil and Spinach Broth Soup',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'1 cup red lentils, rinsed',
			'6 cups vegetable broth',
			'2 cups fresh spinach',
			'1 tsp cumin',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add lentils, broth, and cumin; simmer 20 minutes until tender.',
			'Stir in spinach until wilted. Season and serve.'
		],
		tags: [
			'soup',
			'broth',
			'high-protein',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '260 calories, 6g fat, 35g carbs, 14g protein',
		time: 30
	},
	{
		id: 16,
		name: 'Beef and Vegetable Stew',
		servings: '4',
		ingredients: [
			'1 lb beef stew meat, cubed',
			'2 tbsp olive oil',
			'1 onion, chopped',
			'2 carrots, sliced',
			'2 celery stalks, chopped',
			'2 potatoes, diced',
			'4 cups beef broth',
			'1 tsp dried thyme',
			'1 bay leaf',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef in olive oil until browned, remove and set aside.',
			'Sauté onion, carrots, and celery until softened.',
			'Return beef to pot, add potatoes, broth, thyme, and bay leaf.',
			'Simmer 1–1.5 hours until beef and vegetables are tender. Season and serve.'
		],
		tags: ['stew', 'beef', 'hearty', 'gluten-free'],
		nutrition: '450 calories, 18g fat, 30g carbs, 38g protein',
		time: 90
	},
	{
		id: 17,
		name: 'Chicken and Dumpling Stew',
		servings: '4',
		ingredients: [
			'1 lb chicken thighs, boneless',
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 carrots, sliced',
			'2 celery stalks, sliced',
			'4 cups chicken broth',
			'1 cup all-purpose flour',
			'1 tsp baking powder',
			'½ cup milk',
			'Salt and pepper to taste',
			'Fresh parsley for garnish'
		],
		instructions: [
			'Sauté chicken in olive oil until lightly browned, remove and set aside.',
			'Sauté onion, carrots, and celery until tender, add chicken and broth, simmer 15 minutes.',
			'Mix flour, baking powder, milk, and seasoning to form dumpling dough.',
			'Drop dumplings into simmering stew, cover, and cook 15 minutes. Garnish and serve.'
		],
		tags: ['stew', 'chicken', 'comfort food', 'economic'],
		nutrition: '420 calories, 15g fat, 35g carbs, 32g protein',
		time: 60
	},
	{
		id: 18,
		name: 'Lamb and Lentil Stew',
		servings: '4',
		ingredients: [
			'1 lb lamb shoulder, cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'1 cup red lentils',
			'4 cups vegetable broth',
			'1 tsp cumin',
			'1 tsp smoked paprika',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear lamb in olive oil until browned, remove and set aside.',
			'Sauté onion and garlic until fragrant, add spices.',
			'Add lentils, broth, and lamb; simmer 45 minutes until tender. Season and serve.'
		],
		tags: ['stew', 'lamb', 'hearty', 'gluten-free', 'easy'],
		nutrition: '380 calories, 16g fat, 28g carbs, 32g protein',
		time: 60
	},
	{
		id: 19,
		name: 'Vegetarian Chickpea Stew',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 carrots, diced',
			'1 zucchini, diced',
			'1 can chickpeas, drained',
			'4 cups vegetable broth',
			'1 tsp cumin',
			'1 tsp smoked paprika',
			'Salt and pepper to taste',
			'Fresh cilantro for garnish'
		],
		instructions: [
			'Sauté onion and garlic in olive oil until fragrant.',
			'Add carrots, zucchini, chickpeas, broth, and spices; simmer 25 minutes.',
			'Garnish with fresh cilantro and serve.'
		],
		tags: ['stew', 'healthy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '280 calories, 7g fat, 40g carbs, 12g protein',
		time: 35
	},
	{
		id: 20,
		name: 'Seafood Stew (Cioppino Style)',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'1 bell pepper, diced',
			'1 can diced tomatoes',
			'4 cups fish or seafood broth',
			'½ lb shrimp, peeled',
			'½ lb mussels, cleaned',
			'½ lb firm white fish, cubed',
			'1 tsp smoked paprika',
			'Salt and pepper to taste',
			'Fresh parsley for garnish'
		],
		instructions: [
			'Sauté onion, garlic, and bell pepper in olive oil until softened.',
			'Add tomatoes, broth, and paprika; simmer 10 minutes.',
			'Add seafood and cook until shrimp turn pink and mussels open.',
			'Season and garnish with parsley before serving.'
		],
		tags: ['stew', 'seafood', 'hearty', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '300 calories, 8g fat, 15g carbs, 40g protein',
		time: 35
	},
	{
		id: 21,
		name: 'Beef and Guinness Stew',
		servings: '4',
		ingredients: [
			'1 lb beef stew meat, cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 carrots, sliced',
			'2 celery stalks, chopped',
			'4 cups beef broth',
			'1 cup Guinness beer',
			'1 tsp thyme',
			'1 bay leaf',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef in olive oil until browned, remove and set aside.',
			'Sauté onion, carrots, and celery until tender.',
			'Return beef to pot, add broth, Guinness, thyme, and bay leaf.',
			'Simmer 1.5 hours until tender. Season and serve.'
		],
		tags: ['stew', 'beef', 'irish', 'hearty', 'gluten-free', 'easy'],
		nutrition: '470 calories, 20g fat, 25g carbs, 38g protein',
		time: 90
	},
	{
		id: 22,
		name: 'Moroccan Chickpea and Vegetable Stew',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'1 carrot, diced',
			'1 zucchini, diced',
			'1 can chickpeas, drained',
			'1 can diced tomatoes',
			'1 tsp cumin',
			'1 tsp coriander',
			'½ tsp cinnamon',
			'4 cups vegetable broth',
			'Salt and pepper to taste',
			'Fresh cilantro for garnish'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add carrots, zucchini, chickpeas, spices, tomatoes, and broth; simmer 30 minutes.',
			'Garnish with cilantro and serve.'
		],
		tags: ['stew', 'moroccan', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '290 calories, 8g fat, 45g carbs, 12g protein',
		time: 40
	},
	{
		id: 23,
		name: 'Hungarian Goulash',
		servings: '4',
		ingredients: [
			'1 lb beef stew meat, cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 tbsp paprika',
			'4 cups beef broth',
			'2 potatoes, diced',
			'2 carrots, sliced',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef in olive oil, remove and set aside.',
			'Sauté onion and garlic, add paprika.',
			'Return beef to pot, add broth, potatoes, and carrots; simmer 1 hour.',
			'Season and serve.'
		],
		tags: ['stew', 'beef', 'hungarian', 'hearty', 'gluten-free', 'easy'],
		nutrition: '440 calories, 16g fat, 30g carbs, 38g protein',
		time: 80
	},
	{
		id: 24,
		name: 'Irish Lamb Stew',
		servings: '4',
		ingredients: [
			'1 lb lamb shoulder, cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 carrots, sliced',
			'2 potatoes, diced',
			'4 cups lamb or vegetable broth',
			'1 tsp thyme',
			'1 bay leaf',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear lamb in olive oil, remove and set aside.',
			'Sauté onion, carrots, and potatoes briefly.',
			'Return lamb to pot, add broth, thyme, and bay leaf; simmer 1–1.5 hours.',
			'Season and serve.'
		],
		tags: ['stew', 'lamb', 'irish', 'hearty', 'gluten-free', 'easy'],
		nutrition: '460 calories, 20g fat, 28g carbs, 38g protein',
		time: 90
	},
	{
		id: 25,
		name: 'White Bean and Kale Stew',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 carrots, diced',
			'2 celery stalks, diced',
			'1 can white beans, drained',
			'4 cups vegetable broth',
			'2 cups chopped kale',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion, garlic, carrots, and celery in olive oil.',
			'Add beans, broth, and thyme; simmer 25 minutes.',
			'Stir in kale and cook 5 more minutes. Season and serve.'
		],
		tags: ['stew', 'healthy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '250 calories, 6g fat, 35g carbs, 14g protein',
		time: 35
	},
	{
		id: 26,
		name: 'Sweet Potato and Black Bean Stew',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 sweet potatoes, diced',
			'1 can black beans, drained',
			'4 cups vegetable broth',
			'1 tsp cumin',
			'1 tsp smoked paprika',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add sweet potatoes, beans, broth, and spices; simmer 25–30 minutes until tender.',
			'Season and serve.'
		],
		tags: ['stew', 'healthy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '270 calories, 6g fat, 45g carbs, 12g protein',
		time: 40
	},
	{
		id: 27,
		name: 'Seafood Gumbo',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'1 bell pepper, diced',
			'2 celery stalks, diced',
			'2 garlic cloves, minced',
			'4 cups seafood broth',
			'½ lb shrimp',
			'½ lb crab meat',
			'1 tsp smoked paprika',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion, bell pepper, celery, and garlic in olive oil.',
			'Add broth, spices, shrimp, and crab meat; simmer 10–15 minutes.',
			'Season and serve.'
		],
		tags: ['stew', 'seafood', 'hearty', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '320 calories, 10g fat, 12g carbs, 38g protein',
		time: 30
	},
	{
		id: 28,
		name: 'Pork and Cabbage Stew',
		servings: '4',
		ingredients: [
			'1 lb pork shoulder, cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'½ head cabbage, chopped',
			'2 carrots, sliced',
			'4 cups chicken broth',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear pork in olive oil until browned, remove and set aside.',
			'Sauté onion, garlic, cabbage, and carrots until tender.',
			'Return pork to pot, add broth and thyme; simmer 1 hour.',
			'Season and serve.'
		],
		tags: ['stew', 'pork', 'hearty', 'gluten-free'],
		nutrition: '420 calories, 18g fat, 28g carbs, 36g protein',
		time: 75
	},
	{
		id: 29,
		name: 'Turkey and White Bean Stew',
		servings: '4',
		ingredients: [
			'1 lb ground turkey',
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 carrots, diced',
			'1 can white beans, drained',
			'4 cups chicken broth',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté turkey in olive oil until browned, remove and set aside.',
			'Sauté onion, garlic, and carrots until softened.',
			'Return turkey to pot, add beans, broth, and thyme; simmer 30 minutes.',
			'Season and serve.'
		],
		tags: ['stew', 'turkey', 'gluten-free', 'healthy', 'easy'],
		nutrition: '350 calories, 12g fat, 28g carbs, 32g protein',
		time: 45
	},
	{
		id: 30,
		name: 'Mushroom and Barley Stew',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 cups mushrooms, sliced',
			'1 cup pearl barley',
			'4 cups vegetable broth',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add mushrooms and cook until soft.',
			'Add barley, broth, and thyme; simmer 40–45 minutes until barley is tender.',
			'Season and serve.'
		],
		tags: ['stew', 'hearty', 'vegetarian', 'gluten-free', 'economic', 'easy'],
		nutrition: '260 calories, 6g fat, 45g carbs, 10g protein',
		time: 50
	},
	{
		id: 31,
		name: 'New England Clam Chowder',
		servings: '4',
		ingredients: [
			'4 slices bacon, diced',
			'1 onion, chopped',
			'2 celery stalks, diced',
			'2 cups diced potatoes',
			'4 cups clam juice',
			'1 can clams, drained',
			'1 cup heavy cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook bacon until crisp, remove and set aside.',
			'Sauté onion and celery in bacon fat until soft.',
			'Add potatoes and clam juice; simmer until potatoes are tender.',
			'Stir in clams and cream, heat gently. Season and serve.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '420 calories, 22g fat, 28g carbs, 20g protein',
		time: 40
	},
	{
		id: 32,
		name: 'Corn Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, chopped',
			'2 celery stalks, diced',
			'3 cups corn kernels',
			'2 cups diced potatoes',
			'4 cups vegetable broth',
			'1 cup milk or cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and celery in butter until soft.',
			'Add corn, potatoes, and broth; simmer until potatoes are tender.',
			'Blend slightly for creaminess, stir in milk/cream, season, and serve.'
		],
		tags: ['chowder', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '300 calories, 12g fat, 40g carbs, 6g protein',
		time: 35
	},
	{
		id: 33,
		name: 'Lobster Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, chopped',
			'2 carrots, chopped',
			'2 celery stalks, chopped',
			'4 cups lobster stock',
			'1 cup heavy cream',
			'1 lb cooked lobster meat',
			'Salt and pepper to taste',
			'Paprika for garnish'
		],
		instructions: [
			'Sauté onion, carrots, and celery in butter until soft.',
			'Add lobster stock and simmer 15 minutes.',
			'Blend until smooth, stir in cream and lobster meat, heat gently, season, and serve.'
		],
		tags: ['bisque', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '380 calories, 22g fat, 12g carbs, 28g protein',
		time: 40
	},
	{
		id: 34,
		name: 'Potato and Leek Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'2 leeks, cleaned and sliced',
			'2 cups diced potatoes',
			'4 cups vegetable broth',
			'1 cup milk or cream',
			'Salt and pepper to taste',
			'Chopped chives for garnish'
		],
		instructions: [
			'Sauté leeks in butter until soft.',
			'Add potatoes and broth; simmer until potatoes are tender.',
			'Blend slightly, stir in milk/cream, season, and garnish with chives.'
		],
		tags: ['chowder', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '280 calories, 12g fat, 38g carbs, 6g protein',
		time: 35
	},
	{
		id: 35,
		name: 'Seafood Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 celery stalks, diced',
			'2 cups diced potatoes',
			'4 cups seafood stock',
			'½ lb shrimp, peeled',
			'½ lb scallops',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and celery in butter until soft.',
			'Add potatoes and stock; simmer until tender.',
			'Add shrimp, scallops, and cream; cook until seafood is done. Season and serve.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '380 calories, 18g fat, 25g carbs, 28g protein',
		time: 40
	},
	{
		id: 36,
		name: 'Tomato Basil Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, chopped',
			'2 garlic cloves, minced',
			'4 cups diced tomatoes',
			'2 cups vegetable broth',
			'½ cup heavy cream',
			'¼ cup fresh basil, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil until soft.',
			'Add tomatoes and broth; simmer 20 minutes.',
			'Blend until smooth, stir in cream and basil, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '250 calories, 10g fat, 28g carbs, 4g protein',
		time: 35
	},
	{
		id: 37,
		name: 'Corn and Crab Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 celery stalks, diced',
			'3 cups corn kernels',
			'4 cups seafood broth',
			'½ lb crab meat',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and celery in butter.',
			'Add corn and broth; simmer 15 minutes.',
			'Stir in crab meat and cream; heat gently, season, and serve.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '340 calories, 16g fat, 25g carbs, 22g protein',
		time: 30
	},
	{
		id: 38,
		name: 'Mushroom Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'3 cups mushrooms, sliced',
			'4 cups vegetable broth',
			'1 cup cream',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and mushrooms in butter until soft.',
			'Add broth and thyme; simmer 15 minutes.',
			'Blend until smooth, stir in cream, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 14g fat, 20g carbs, 6g protein',
		time: 35
	},
	{
		id: 39,
		name: 'Sweet Potato and Coconut Chowder',
		servings: '4',
		ingredients: [
			'1 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'2 sweet potatoes, diced',
			'4 cups vegetable broth',
			'1 cup coconut milk',
			'1 tsp curry powder',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add sweet potatoes, broth, and curry powder; simmer 20 minutes.',
			'Blend partially, stir in coconut milk, season, and serve.'
		],
		tags: ['chowder', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '310 calories, 14g fat, 40g carbs, 5g protein',
		time: 35
	},
	{
		id: 40,
		name: 'Salmon Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 celery stalks, diced',
			'2 cups diced potatoes',
			'4 cups fish stock',
			'½ lb salmon, cubed',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and celery in butter until tender.',
			'Add potatoes and fish stock; simmer 15 minutes.',
			'Add salmon and cream; cook gently until salmon is done. Season and serve.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '360 calories, 16g fat, 28g carbs, 28g protein',
		time: 35
	},
	{
		id: 41,
		name: 'Clam and Corn Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'3 cups corn kernels',
			'4 cups clam juice',
			'1 cup heavy cream',
			'1 can clams, drained',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter.',
			'Add corn and clam juice; simmer 10 minutes.',
			'Blend until smooth, stir in cream and clams, season, and serve.'
		],
		tags: ['bisque', 'seafood', 'creamy', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '320 calories, 16g fat, 25g carbs, 14g protein',
		time: 30
	},
	{
		id: 42,
		name: 'Pumpkin Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 cups pumpkin puree',
			'4 cups vegetable broth',
			'1 cup cream',
			'½ tsp nutmeg',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter until soft.',
			'Add pumpkin puree and broth; simmer 10 minutes.',
			'Blend until smooth, stir in cream and nutmeg, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '280 calories, 14g fat, 28g carbs, 4g protein',
		time: 25
	},
	{
		id: 43,
		name: 'Shrimp and Sweet Corn Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 cups corn kernels',
			'4 cups seafood stock',
			'½ lb shrimp, peeled',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter.',
			'Add corn and stock; simmer 10 minutes.',
			'Stir in shrimp and cream; cook until shrimp are pink. Season and serve.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '330 calories, 16g fat, 20g carbs, 24g protein',
		time: 25
	},
	{
		id: 44,
		name: 'Carrot and Ginger Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups diced carrots',
			'1-inch piece ginger, minced',
			'4 cups vegetable broth',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and ginger in olive oil.',
			'Add carrots and broth; simmer until carrots are tender.',
			'Blend until smooth, stir in cream, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '260 calories, 12g fat, 30g carbs, 4g protein',
		time: 35
	},
	{
		id: 45,
		name: 'Crawfish Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'1 bell pepper, diced',
			'2 celery stalks, diced',
			'4 cups seafood stock',
			'½ lb crawfish tails',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion, bell pepper, and celery in butter.',
			'Add seafood stock; simmer 10 minutes.',
			'Stir in crawfish and cream, heat gently. Season and serve.'
		],
		tags: ['bisque', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '360 calories, 18g fat, 15g carbs, 28g protein',
		time: 30
	},
	{
		id: 46,
		name: 'Smoked Salmon Chowder',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 cups diced potatoes',
			'4 cups fish stock',
			'½ lb smoked salmon, chopped',
			'1 cup cream',
			'Salt and pepper to taste',
			'Dill for garnish'
		],
		instructions: [
			'Sauté onion in butter.',
			'Add potatoes and stock; simmer until tender.',
			'Stir in salmon and cream; heat gently. Season and garnish with dill.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '370 calories, 18g fat, 25g carbs, 28g protein',
		time: 35
	},
	{
		id: 47,
		name: 'Celery Root and Potato Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 cups diced celery root',
			'2 cups diced potatoes',
			'4 cups vegetable broth',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter until soft.',
			'Add celery root, potatoes, and broth; simmer until tender.',
			'Blend until smooth, stir in cream, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '270 calories, 12g fat, 32g carbs, 4g protein',
		time: 35
	},
	{
		id: 48,
		name: 'Clam and Potato Chowder',
		servings: '4',
		ingredients: [
			'4 slices bacon, diced',
			'1 onion, diced',
			'2 cups diced potatoes',
			'4 cups clam juice',
			'1 can clams, drained',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook bacon until crisp, remove.',
			'Sauté onion in bacon fat.',
			'Add potatoes and clam juice; simmer until tender.',
			'Stir in clams and cream; heat gently, season, and serve with bacon on top.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '400 calories, 20g fat, 28g carbs, 22g protein',
		time: 40
	},
	{
		id: 49,
		name: 'Spiced Pumpkin Bisque',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'2 cups pumpkin puree',
			'4 cups vegetable broth',
			'1 cup cream',
			'½ tsp nutmeg',
			'½ tsp cinnamon',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter until soft.',
			'Add pumpkin puree and broth; simmer 10 minutes.',
			'Blend until smooth, stir in cream and spices, season, and serve.'
		],
		tags: ['bisque', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '290 calories, 14g fat, 30g carbs, 4g protein',
		time: 25
	},
	{
		id: 50,
		name: 'Clam and Mussle Chowder with Bacon',
		servings: '4',
		ingredients: [
			'4 slices bacon, diced',
			'1 onion, diced',
			'2 cups mussles',
			'2 cups diced potatoes',
			'4 cups clam juice',
			'1 can clams, drained',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook bacon until crisp, remove and set aside.',
			'Sauté onion in bacon fat.',
			'Add potatoes, and clam juice; simmer until potatoes are tender.',
			'Stir in clams, mussles and cream; heat gently, season, and serve with bacon on top.'
		],
		tags: ['chowder', 'seafood', 'creamy', 'gluten-free', 'fast', 'easy'],
		nutrition: '420 calories, 20g fat, 32g carbs, 22g protein',
		time: 40
	},
	{
		id: 51,
		name: 'Roasted Butternut Squash Soup with Sage',
		servings: '4',
		ingredients: [
			'1 medium butternut squash, peeled and cubed',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'4 cups vegetable broth',
			'½ cup heavy cream',
			'1 tsp fresh sage, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Toss squash with olive oil and roast at 400°F for 25 minutes.',
			'Sauté onion and garlic in a pot, add roasted squash and broth.',
			'Simmer 15 minutes, blend until smooth, stir in cream and sage, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'vegetarian', 'gluten-free', 'economic', 'easy'],
		nutrition: '280 calories, 14g fat, 30g carbs, 4g protein',
		time: 50
	},
	{
		id: 52,
		name: 'French Onion Soup with Gruyère Crust',
		servings: '4',
		ingredients: [
			'4 large onions, thinly sliced',
			'3 tbsp butter',
			'1 tsp sugar',
			'4 cups beef broth',
			'1 cup dry white wine',
			'4 slices baguette, toasted',
			'½ cup grated Gruyère cheese',
			'Salt and pepper to taste'
		],
		instructions: [
			'Melt butter, sauté onions with sugar until caramelized.',
			'Add wine and simmer 5 minutes, then add broth and simmer 15 minutes.',
			'Ladle soup into oven-safe bowls, top with baguette and cheese, broil until bubbly and golden.'
		],
		tags: ['soup', 'beef', 'gourmet', 'easy'],
		nutrition: '380 calories, 18g fat, 40g carbs, 12g protein',
		time: 60
	},
	{
		id: 53,
		name: 'Lobster Bisque with Cognac',
		servings: '4',
		ingredients: [
			'1 lb cooked lobster meat',
			'2 tbsp butter',
			'1 onion, diced',
			'2 carrots, diced',
			'2 celery stalks, diced',
			'4 cups lobster stock',
			'½ cup heavy cream',
			'2 tbsp Cognac',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion, carrots, and celery in butter.',
			'Add lobster stock and simmer 15 minutes.',
			'Blend until smooth, stir in cream, Cognac, and lobster meat, heat gently, and serve.'
		],
		tags: ['soup', 'seafood', 'gourmet', 'creamy'],
		nutrition: '420 calories, 22g fat, 12g carbs, 30g protein',
		time: 40
	},
	{
		id: 54,
		name: 'Miso and Soba Noodle Soup with Shiitake Mushrooms',
		servings: '4',
		ingredients: [
			'4 cups dashi or vegetable broth',
			'2 tbsp miso paste',
			'1 cup sliced shiitake mushrooms',
			'1 cup cooked soba noodles',
			'2 green onions, sliced',
			'1 tsp sesame oil',
			'Soy sauce to taste'
		],
		instructions: [
			'Simmer broth and mushrooms 10 minutes.',
			'Dissolve miso paste in some broth, add back to pot.',
			'Add noodles, drizzle with sesame oil, top with green onions and serve.'
		],
		tags: ['soup', 'vegetarian', 'gourmet', 'asian', 'easy', 'fast'],
		nutrition: '220 calories, 5g fat, 35g carbs, 8g protein',
		time: 25
	},
	{
		id: 55,
		name: 'Roasted Cauliflower and Truffle Soup',
		servings: '4',
		ingredients: [
			'1 head cauliflower, chopped',
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups vegetable broth',
			'½ cup cream',
			'1 tsp truffle oil',
			'Salt and pepper to taste'
		],
		instructions: [
			'Toss cauliflower with olive oil and roast at 400°F for 25 minutes.',
			'Sauté onion, add roasted cauliflower and broth, simmer 15 minutes.',
			'Blend until smooth, stir in cream and truffle oil, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'vegetarian', 'gluten-free', 'easy'],
		nutrition: '260 calories, 14g fat, 25g carbs, 6g protein',
		time: 45
	},
	{
		id: 56,
		name: 'Creamy Tomato and Roasted Red Pepper Soup',
		servings: '4',
		ingredients: [
			'2 red bell peppers, roasted and peeled',
			'4 cups diced tomatoes',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'1 cup cream',
			'Salt and pepper to taste',
			'Fresh basil for garnish'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add roasted peppers and tomatoes, simmer 15 minutes.',
			'Blend until smooth, stir in cream, season, garnish with basil, and serve.'
		],
		tags: ['soup', 'creamy', 'gourmet', 'vegetarian', 'gluten-free', 'fast'],
		nutrition: '270 calories, 12g fat, 28g carbs, 4g protein',
		time: 35
	},
	{
		id: 57,
		name: 'Carrot, Ginger, and Orange Soup',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups diced carrots',
			'1-inch piece ginger, minced',
			'4 cups vegetable broth',
			'½ cup orange juice',
			'½ cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and ginger in olive oil.',
			'Add carrots and broth, simmer until tender.',
			'Blend until smooth, stir in orange juice and cream, season, and serve.'
		],
		tags: ['soup', 'creamy', 'gourmet', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '250 calories, 12g fat, 30g carbs, 4g protein',
		time: 35
	},
	{
		id: 58,
		name: 'Wild Mushroom and Sherry Soup',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'3 cups assorted wild mushrooms, sliced',
			'4 cups vegetable broth',
			'½ cup sherry',
			'½ cup cream',
			'1 tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and mushrooms in butter until tender.',
			'Add broth and thyme, simmer 10 minutes.',
			'Blend partially, stir in sherry and cream, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '280 calories, 14g fat, 15g carbs, 6g protein',
		time: 35
	},
	{
		id: 59,
		name: 'Pea and Mint Soup',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups fresh or frozen peas',
			'4 cups vegetable broth',
			'¼ cup fresh mint leaves',
			'½ cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in olive oil until soft.',
			'Add peas and broth, simmer 10 minutes.',
			'Blend with mint until smooth, stir in cream, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '230 calories, 10g fat, 30g carbs, 6g protein',
		time: 25
	},
	{
		id: 60,
		name: 'Butternut Squash and Apple Soup',
		servings: '4',
		ingredients: [
			'1 medium butternut squash, cubed',
			'2 apples, peeled and diced',
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups vegetable broth',
			'½ cup cream',
			'1 tsp cinnamon',
			'Salt and pepper to taste'
		],
		instructions: [
			'Toss squash with olive oil and roast 25 minutes.',
			'Sauté onion and apples in olive oil, add roasted squash and broth.',
			'Simmer 15 minutes, blend until smooth, stir in cream and cinnamon, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'easy'],
		nutrition: '260 calories, 12g fat, 32g carbs, 4g protein',
		time: 50
	},
	{
		id: 61,
		name: 'Sweet Potato and Coconut Soup with Lemongrass',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'4 cups diced sweet potatoes',
			'2 cups coconut milk',
			'2 cups vegetable broth',
			'1 stalk lemongrass, bruised',
			'1 tsp ginger, minced',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and ginger in olive oil.',
			'Add sweet potatoes, broth, and lemongrass; simmer 20 minutes.',
			'Blend until smooth, stir in coconut milk, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '270 calories, 12g fat, 32g carbs, 3g protein',
		time: 40
	},
	{
		id: 62,
		name: 'Roasted Red Pepper and Tomato Soup with Basil Oil',
		servings: '4',
		ingredients: [
			'3 red bell peppers, roasted and peeled',
			'4 cups diced tomatoes',
			'2 tbsp olive oil',
			'1 onion, diced',
			'2 garlic cloves, minced',
			'¼ cup fresh basil, chopped',
			'1 cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion and garlic in olive oil.',
			'Add roasted peppers and tomatoes, simmer 15 minutes.',
			'Blend until smooth, stir in cream, season, drizzle with basil oil, and serve.'
		],
		tags: ['soup', 'creamy', 'gourmet', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '270 calories, 12g fat, 28g carbs, 4g protein',
		time: 35
	},
	{
		id: 63,
		name: 'Cauliflower, Almond, and Saffron Soup',
		servings: '4',
		ingredients: [
			'1 head cauliflower, chopped',
			'2 tbsp butter',
			'1 onion, diced',
			'4 cups vegetable broth',
			'¼ cup almond paste',
			'A pinch of saffron',
			'½ cup cream',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter.',
			'Add cauliflower, broth, and saffron; simmer 15 minutes.',
			'Blend until smooth, stir in almond paste and cream, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '290 calories, 14g fat, 22g carbs, 6g protein',
		time: 40
	},
	{
		id: 64,
		name: 'Asparagus and Lemon Soup',
		servings: '4',
		ingredients: [
			'2 tbsp butter',
			'1 onion, diced',
			'1 lb asparagus, trimmed',
			'4 cups vegetable broth',
			'½ cup cream',
			'Juice of 1 lemon',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter.',
			'Add asparagus and broth; simmer until tender.',
			'Blend until smooth, stir in cream and lemon juice, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '220 calories, 10g fat, 18g carbs, 6g protein',
		time: 35
	},
	{
		id: 65,
		name: 'White Bean and Truffle Soup',
		servings: '4',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'3 cups cooked white beans',
			'4 cups vegetable broth',
			'½ cup cream',
			'1 tsp truffle oil',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in olive oil.',
			'Add beans and broth, simmer 10 minutes.',
			'Blend until smooth, stir in cream and truffle oil, season, and serve.'
		],
		tags: ['soup', 'gourmet', 'creamy', 'vegetarian', 'gluten-free', 'fast', 'easy'],
		nutrition: '280 calories, 14g fat, 28g carbs, 8g protein',
		time: 35
	}
];
