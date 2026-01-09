// Current Recipe Count: 79

export const Sandwiches: Recipe[] = [
	{
		id: 1,
		name: 'Monte Cristo Sandwich',
		servings: '2',
		ingredients: [
			'4 slices white bread',
			'4 oz sliced ham',
			'4 oz sliced turkey',
			'2 slices Swiss cheese',
			'2 eggs',
			'¼ cup milk',
			'2 tbsp butter',
			'powdered sugar and jam for serving'
		],
		instructions: [
			'Assemble ham, turkey, and cheese between bread.',
			'Whisk eggs and milk, dip sandwiches to coat.',
			'Cook on skillet with butter until golden on both sides.',
			'Dust with powdered sugar and serve with jam.'
		],
		tags: [
			'sandwich',
			'grilled',
			'sweet',
			'ham',
			'turkey',
			'brunch',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '680 calories, 38g fat, 40g carbs, 45g protein',
		time: 25
	},
	{
		id: 2,
		name: 'Classic Grilled Cheese Sandwich',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'4 tbsp butter, softened',
			'4 slices sharp cheddar cheese'
		],
		instructions: [
			'Butter one side of each bread slice.',
			'Place cheese between two unbuttered sides of bread.',
			'Grill in a skillet over medium heat until golden brown on both sides and cheese is melted.'
		],
		tags: [
			'sandwich',
			'grilled',
			'cheese',
			'comfort food',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '480 calories, 30g fat, 36g carbs, 15g protein',
		time: 15
	},
	{
		id: 3,
		name: 'Turkey Bacon Avocado Melt',
		servings: '2',
		ingredients: [
			'4 slices whole grain bread',
			'4 oz sliced turkey breast',
			'4 slices cooked bacon',
			'1 avocado, sliced',
			'2 slices provolone cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Butter the outside of the bread.',
			'Layer turkey, bacon, avocado, and cheese inside.',
			'Grill until bread is golden and cheese melted, about 4 minutes per side.'
		],
		tags: ['sandwich', 'grilled', 'turkey', 'avocado', 'bacon', 'gluten-free', 'easy'],
		nutrition: '610 calories, 38g fat, 32g carbs, 32g protein',
		time: 20
	},
	{
		id: 4,
		name: 'Caprese Panini',
		servings: '2',
		ingredients: [
			'4 slices ciabatta bread',
			'2 tomatoes, sliced',
			'8 slices fresh mozzarella',
			'6 basil leaves',
			'2 tbsp balsamic glaze',
			'2 tbsp olive oil'
		],
		instructions: [
			'Brush bread with olive oil.',
			'Layer tomato, mozzarella, and basil on bread, drizzle with balsamic glaze.',
			'Grill in a panini press until cheese melts and bread is crisp.'
		],
		tags: ['sandwich', 'panini', 'italian', 'grilled', 'vegetarian', 'gluten-free', 'fast'],
		nutrition: '540 calories, 28g fat, 38g carbs, 25g protein',
		time: 15
	},
	{
		id: 5,
		name: 'Korean Blt',
		servings: '2',
		ingredients: [
			'4 slices Brioche bread',
			'8 oz crispy pork belly, thin sliced',
			'4 oz ham, sliced',
			'4 slices Swiss cheese',
			'4 dill pickle slices',
			'2 tbsp yellow mustard',
			'2 tbsp gochujang mayonnaise mix',
			'2 tbsp Kbbq sauce',
			'2 tbsp butter'
		],
		instructions: [
			'Spread mustard and gochujang mayonnaise on bread slices.',
			'Layer pork, ham, cheese, and pickles.',
			'drizzle with Kbbq sauce, close the sandwich.',
			'Butter outside of bread and press in skillet or panini maker until crisp and hot.'
		],
		tags: ['sandwich', 'grilled', 'pork', 'ham', 'classic', 'gluten-free'],
		nutrition: '590 calories, 28g fat, 42g carbs, 38g protein',
		time: 20
	},
	{
		id: 6,
		name: 'Tuna Melt',
		servings: '2',
		ingredients: [
			'4 slices rye bread',
			'1 can tuna, drained',
			'2 tbsp mayonnaise',
			'1 tbsp diced celery',
			'2 slices cheddar cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Mix tuna, mayo, and celery.',
			'Spread on bread, top with cheese.',
			'Butter outsides and grill until golden and cheese melts.'
		],
		tags: [
			'sandwich',
			'grilled',
			'tuna',
			'seafood',
			'classic',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '470 calories, 25g fat, 32g carbs, 30g protein',
		time: 15
	},
	{
		id: 7,
		name: 'Roast Beef and Caramelized Onion Melt',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'6 oz roast beef, thinly sliced',
			'1 cup caramelized onions',
			'2 slices provolone cheese',
			'2 tbsp horseradish sauce',
			'2 tbsp butter'
		],
		instructions: [
			'Spread horseradish sauce on bread.',
			'Layer beef, onions, and cheese.',
			'Butter outsides and grill until cheese melts and bread is golden.'
		],
		tags: ['sandwich', 'grilled', 'beef', 'savory'],
		nutrition: '560 calories, 32g fat, 34g carbs, 30g protein',
		time: 20
	},
	{
		id: 8,
		name: 'Pesto Chicken Panini',
		servings: '2',
		ingredients: [
			'4 slices ciabatta bread',
			'4 oz grilled chicken breast, sliced',
			'2 tbsp pesto',
			'2 slices mozzarella cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Spread pesto on bread.',
			'Add chicken and cheese.',
			'Butter outsides and grill until hot and crispy.'
		],
		tags: ['sandwich', 'chicken', 'grilled', 'italian', 'panini', 'gluten-free', 'fast', 'easy'],
		nutrition: '520 calories, 27g fat, 35g carbs, 32g protein',
		time: 18
	},
	{
		id: 9,
		name: 'Mushroom Swiss Melt',
		servings: '2',
		ingredients: [
			'4 slices rye bread',
			'2 cups sliced mushrooms',
			'2 slices Swiss cheese',
			'1 tbsp butter',
			'1 tbsp olive oil',
			'¼ tsp thyme'
		],
		instructions: [
			'Sauté mushrooms with olive oil, butter, and thyme until golden.',
			'Layer mushrooms and cheese between bread slices.',
			'Grill until bread is toasted and cheese melts.'
		],
		tags: ['sandwich', 'vegetarian', 'mushroom', 'grilled', 'savory', 'economic'],
		nutrition: '450 calories, 24g fat, 38g carbs, 18g protein',
		time: 20
	},
	{
		id: 10,
		name: 'Ham and Brie Baguette Melt',
		servings: '2',
		ingredients: [
			'1 small baguette, halved lengthwise',
			'4 oz sliced ham',
			'4 oz brie cheese, sliced',
			'1 tbsp dijon mustard',
			'2 tsp honey'
		],
		instructions: [
			'Spread dijon and honey on baguette.',
			'Layer ham and brie inside.',
			'Toast in oven or press until cheese is melted and bread crisp.'
		],
		tags: ['sandwich', 'grilled', 'ham', 'cheese', 'french', 'fast', 'easy'],
		nutrition: '530 calories, 26g fat, 42g carbs, 28g protein',
		time: 15
	},
	{
		id: 11,
		name: 'Pulled Pork BBQ Sandwich',
		servings: '4',
		ingredients: [
			'4 sandwich rolls',
			'2 cups pulled pork',
			'½ cup barbecue sauce',
			'½ cup coleslaw'
		],
		instructions: [
			'Mix pulled pork with barbecue sauce and heat through.',
			'Pile pork onto rolls and top with coleslaw.',
			'Toast rolls lightly if desired before serving.'
		],
		tags: ['sandwich', 'barbecue', 'pork', 'toasted', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '610 calories, 28g fat, 45g carbs, 35g protein',
		time: 25
	},
	{
		id: 12,
		name: 'Eggplant Parmesan Panini',
		servings: '2',
		ingredients: [
			'4 slices ciabatta bread',
			'4 slices roasted eggplant',
			'2 slices mozzarella',
			'2 tbsp marinara sauce',
			'2 tbsp olive oil'
		],
		instructions: [
			'Layer roasted eggplant, marinara, and mozzarella on bread.',
			'Brush outside with olive oil.',
			'Press in panini grill until golden and cheese is melted.'
		],
		tags: [
			'sandwich',
			'italian',
			'grilled',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '510 calories, 24g fat, 40g carbs, 22g protein',
		time: 18
	},
	{
		id: 13,
		name: 'Reuben Sandwich',
		servings: '2',
		ingredients: [
			'4 slices rye bread',
			'4 oz corned beef',
			'¼ cup sauerkraut, drained',
			'2 slices Swiss cheese',
			'2 tbsp Thousand Island dressing',
			'2 tbsp butter'
		],
		instructions: [
			'Spread dressing on bread.',
			'Layer corned beef, sauerkraut, and cheese.',
			'Butter outsides and grill until golden brown.'
		],
		tags: ['sandwich', 'grilled', 'beef', 'classic', 'reuben', 'easy'],
		nutrition: '640 calories, 35g fat, 42g carbs, 34g protein',
		time: 20
	},
	{
		id: 14,
		name: 'Spinach Artichoke Grilled Cheese',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'1 cup chopped spinach',
			'½ cup chopped artichoke hearts',
			'4 oz cream cheese, softened',
			'½ cup mozzarella cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Mix spinach, artichoke, cream cheese, and mozzarella together.',
			'Spread mixture between bread slices.',
			'Butter outsides and grill until crisp and melty.'
		],
		tags: [
			'sandwich',
			'grilled',
			'cheese',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '580 calories, 36g fat, 40g carbs, 20g protein',
		time: 18
	},
	{
		id: 15,
		name: 'Buffalo Chicken Grilled Cheese',
		servings: '2',
		ingredients: [
			'4 slices Texas toast',
			'1 cup shredded cooked chicken',
			'¼ cup buffalo sauce',
			'4 slices cheddar cheese',
			'2 tbsp butter'
		],
		instructions: [
			'Toss chicken with buffalo sauce.',
			'Layer chicken and cheese between bread slices.',
			'Butter outsides and grill until golden and cheese melted.'
		],
		tags: ['sandwich', 'chicken', 'grilled', 'spicy', 'easy'],
		nutrition: '610 calories, 35g fat, 40g carbs, 35g protein',
		time: 20
	},
	{
		id: 16,
		name: 'Smoked Salmon and Dill Panini',
		servings: '2',
		ingredients: [
			'4 slices multigrain bread',
			'4 oz smoked salmon',
			'2 oz cream cheese',
			'1 tbsp fresh dill, chopped',
			'1 tsp lemon juice',
			'2 tbsp butter'
		],
		instructions: [
			'Mix cream cheese, dill, and lemon juice.',
			'Spread on bread and layer smoked salmon.',
			'Butter outsides and toast until lightly golden.'
		],
		tags: ['sandwich', 'seafood', 'grilled', 'brunch', 'gluten-free', 'fast', 'easy'],
		nutrition: '520 calories, 30g fat, 32g carbs, 28g protein',
		time: 15
	},
	{
		id: 17,
		name: 'Grilled Vegetable and Hummus Sandwich',
		servings: '2',
		ingredients: [
			'4 slices whole wheat bread',
			'½ cup hummus',
			'1 cup grilled vegetables (zucchini, peppers, eggplant)',
			'2 tbsp olive oil'
		],
		instructions: [
			'Spread hummus on bread.',
			'Add grilled vegetables.',
			'Grill sandwich until lightly toasted and warm.'
		],
		tags: [
			'sandwich',
			'grilled',
			'healthy',
			'vegetarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '470 calories, 24g fat, 42g carbs, 14g protein',
		time: 15
	},
	{
		id: 18,
		name: 'Caprese Ciabatta',
		servings: '2',
		ingredients: [
			'4 slices ciabatta bread',
			'4 oz fresh mozzarella, sliced',
			'1 large tomato, sliced',
			'10 fresh basil leaves',
			'2 tbsp pesto',
			'1 tsp balsamic glaze'
		],
		instructions: [
			'Spread pesto on each slice of ciabatta.',
			'Layer mozzarella, tomato, and basil leaves.',
			'Drizzle with balsamic glaze and close sandwich.',
			'Serve chilled or at room temperature.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'italian', 'caprese', 'fast', 'easy'],
		nutrition: '480 calories, 26g fat, 34g carbs, 22g protein',
		time: 10
	},
	{
		id: 19,
		name: 'Mediterranean Veggie Sandwich',
		servings: '2',
		ingredients: [
			'4 slices whole wheat bread',
			'4 tbsp hummus',
			'½ cup roasted red peppers',
			'¼ cup sliced cucumber',
			'2 tbsp crumbled feta',
			'¼ cup spinach leaves',
			'1 tbsp olive tapenade'
		],
		instructions: [
			'Spread hummus and olive tapenade on the bread.',
			'Layer cucumber, red peppers, spinach, and feta.',
			'Close sandwich and slice in half.',
			'Serve chilled.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegetarian',
			'mediterranean',
			'healthy',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '420 calories, 18g fat, 45g carbs, 16g protein',
		time: 10
	},
	{
		id: 20,
		name: 'Curried Chickpea Salad Sandwich',
		servings: '2',
		ingredients: [
			'1 can chickpeas, drained and mashed',
			'3 tbsp vegan mayo',
			'1 tsp curry powder',
			'1 stalk celery, diced',
			'½ apple, diced',
			'2 tbsp raisins',
			'4 slices multigrain bread',
			'2 leaves lettuce'
		],
		instructions: [
			'Mix chickpeas, mayo, curry powder, celery, apple, and raisins.',
			'Spread mixture on bread and top with lettuce.',
			'Close and serve chilled.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegan',
			'protein',
			'meal prep',
			'gluten-free',
			'economic',
			'fast',
			'easy',
			'vegetarian'
		],
		nutrition: '390 calories, 14g fat, 48g carbs, 15g protein',
		time: 15
	},
	{
		id: 21,
		name: 'Avocado Club Sandwich',
		servings: '2',
		ingredients: [
			'6 slices sourdough bread',
			'1 ripe avocado, sliced',
			'4 slices tomato',
			'4 slices Swiss cheese',
			'4 slices tempeh bacon',
			'2 tbsp herbed mayo',
			'4 leaves lettuce'
		],
		instructions: [
			'Spread herbed mayo on bread.',
			'Layer lettuce, tomato, avocado, Swiss, and tempeh bacon.',
			'Stack into triple-decker sandwich and slice.',
			'Serve cold.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'club', 'avocado', 'gluten-free', 'easy'],
		nutrition: '610 calories, 32g fat, 52g carbs, 28g protein',
		time: 20
	},
	{
		id: 22,
		name: 'Egg Salad with Dill and Capers',
		servings: '2',
		ingredients: [
			'4 hard-boiled eggs, chopped',
			'2 tbsp mayo',
			'1 tsp Dijon mustard',
			'1 tsp capers, chopped',
			'1 tbsp fresh dill, chopped',
			'Salt and pepper to taste',
			'4 slices rye bread',
			'4 leaves butter lettuce'
		],
		instructions: [
			'Mix eggs, mayo, mustard, capers, and dill.',
			'Season with salt and pepper.',
			'Spread mixture on bread, top with lettuce.',
			'Close sandwich and serve cold.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'egg', 'classic', 'easy'],
		nutrition: '440 calories, 27g fat, 28g carbs, 19g protein',
		time: 15
	},
	{
		id: 23,
		name: 'Roasted Vegetable Baguette',
		servings: '2',
		ingredients: [
			'1 small baguette, halved',
			'½ cup roasted zucchini',
			'½ cup roasted eggplant',
			'½ cup roasted bell peppers',
			'2 oz goat cheese',
			'1 tbsp balsamic vinaigrette'
		],
		instructions: [
			'Spread goat cheese on baguette halves.',
			'Layer roasted vegetables and drizzle with vinaigrette.',
			'Close sandwich and wrap tightly for chilling.',
			'Serve at room temperature.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'mediterranean', 'meal prep', 'gluten-free'],
		nutrition: '520 calories, 22g fat, 58g carbs, 16g protein',
		time: 20
	},
	{
		id: 24,
		name: 'Smoked Tofu and Apple Crunch',
		servings: '2',
		ingredients: [
			'4 slices multigrain bread',
			'4 oz smoked tofu, thinly sliced',
			'½ green apple, thinly sliced',
			'1 handful arugula',
			'2 tsp whole-grain mustard',
			'1 tbsp crushed walnuts'
		],
		instructions: [
			'Spread mustard on bread.',
			'Layer tofu, apple slices, arugula, and walnuts.',
			'Close sandwich and press lightly.',
			'Serve chilled.'
		],
		tags: ['sandwich', 'cold', 'vegan', 'tofu', 'crunchy', 'gluten-free', 'easy', 'vegetarian'],
		nutrition: '410 calories, 17g fat, 45g carbs, 19g protein',
		time: 10
	},
	{
		id: 25,
		name: 'Herbed Cream Cheese and Cucumber Sandwich',
		servings: '2',
		ingredients: [
			'4 slices white bread, crusts removed',
			'4 tbsp whipped cream cheese',
			'1 tsp chopped dill',
			'1 tsp chopped chives',
			'½ cucumber, thinly sliced'
		],
		instructions: [
			'Mix cream cheese with herbs.',
			'Spread on bread and layer cucumber slices.',
			'Close and cut diagonally into triangles.',
			'Serve cold.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegetarian',
			'tea',
			'light',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '320 calories, 14g fat, 36g carbs, 10g protein',
		time: 10
	},
	{
		id: 26,
		name: 'Greek Yogurt Chicken Salad Sandwich',
		servings: '2',
		ingredients: [
			'1 cup cooked chicken breast, diced',
			'¼ cup Greek yogurt',
			'1 tsp lemon juice',
			'¼ cup diced celery',
			'1 tbsp chopped parsley',
			'Salt and pepper to taste',
			'4 slices whole wheat bread'
		],
		instructions: [
			'Mix chicken, yogurt, lemon juice, celery, and parsley.',
			'Season with salt and pepper.',
			'Spread on bread and close sandwich.',
			'Serve chilled.'
		],
		tags: ['sandwich', 'cold', 'high protein', 'chicken', 'healthy', 'gluten-free', 'fast', 'easy'],
		nutrition: '430 calories, 12g fat, 40g carbs, 38g protein',
		time: 15
	},
	{
		id: 27,
		name: 'Avocado and Chickpea Smash',
		servings: '2',
		ingredients: [
			'1 ripe avocado',
			'½ can chickpeas, mashed',
			'1 tbsp lemon juice',
			'½ tsp garlic powder',
			'Salt and pepper to taste',
			'4 slices whole grain bread'
		],
		instructions: [
			'Mash avocado and chickpeas together with lemon juice and seasonings.',
			'Spread on bread and close sandwich.',
			'Serve immediately or chilled.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegan',
			'avocado',
			'protein',
			'vegatarian',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '400 calories, 18g fat, 42g carbs, 13g protein',
		time: 10
	},
	{
		id: 28,
		name: 'Mozzarella Pesto Picnic Sandwich',
		servings: '2',
		ingredients: [
			'1 small baguette, halved',
			'4 oz mozzarella, sliced',
			'2 tbsp pesto',
			'½ roasted red pepper, sliced',
			'1 handful arugula'
		],
		instructions: [
			'Spread pesto on baguette.',
			'Layer mozzarella, red pepper, and arugula.',
			'Close and wrap tightly for a picnic-friendly option.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'italian', 'pesto', 'gluten-free', 'fast', 'easy'],
		nutrition: '510 calories, 24g fat, 52g carbs, 20g protein',
		time: 10
	},
	{
		id: 29,
		name: 'Capers and Tuna Salad Sandwich',
		servings: '2',
		ingredients: [
			'1 can tuna, drained',
			'2 tbsp mayo',
			'1 tsp Dijon mustard',
			'1 tsp capers, chopped',
			'1 tbsp diced red onion',
			'4 slices sourdough bread',
			'2 leaves romaine lettuce'
		],
		instructions: [
			'Combine tuna, mayo, mustard, capers, and onion.',
			'Spread mixture on bread, top with lettuce.',
			'Close and serve chilled.'
		],
		tags: ['sandwich', 'cold', 'tuna', 'lunch', 'protein', 'gluten-free', 'fast', 'easy'],
		nutrition: '450 calories, 21g fat, 38g carbs, 31g protein',
		time: 10
	},
	{
		id: 30,
		name: 'Veggie Hummus Delight',
		servings: '2',
		ingredients: [
			'4 slices multigrain bread',
			'4 tbsp hummus',
			'¼ cup shredded carrots',
			'¼ cup sliced cucumber',
			'¼ cup sprouts',
			'¼ cup sliced bell peppers'
		],
		instructions: [
			'Spread hummus on bread.',
			'Layer vegetables evenly.',
			'Close sandwich and slice in half.',
			'Serve cold.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegan',
			'healthy',
			'vegetable',
			'gluten-free',
			'economic',
			'fast',
			'easy',
			'vegetarian'
		],
		nutrition: '380 calories, 12g fat, 50g carbs, 15g protein',
		time: 10
	},
	{
		id: 31,
		name: 'Apple Cheddar Sandwich with Mustard',
		servings: '2',
		ingredients: [
			'4 slices wheat bread',
			'1 apple, thinly sliced',
			'4 oz sharp cheddar cheese, sliced',
			'2 tsp Dijon mustard',
			'1 handful spinach leaves'
		],
		instructions: [
			'Spread mustard on bread.',
			'Layer cheddar, apple, and spinach.',
			'Close sandwich and serve cold or lightly toasted.'
		],
		tags: [
			'sandwich',
			'cold',
			'vegetarian',
			'cheddar',
			'fruit',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '440 calories, 20g fat, 46g carbs, 19g protein',
		time: 10
	},
	{
		id: 32,
		name: 'Smoked Gouda and Avocado Sandwich',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'4 oz smoked gouda, sliced',
			'½ avocado, sliced',
			'1 handful arugula',
			'1 tbsp honey mustard'
		],
		instructions: [
			'Spread honey mustard on bread.',
			'Layer gouda, avocado, and arugula.',
			'Close and slice to serve cold.'
		],
		tags: ['sandwich', 'cold', 'vegetarian', 'cheese', 'avocado', 'gluten-free', 'fast', 'easy'],
		nutrition: '480 calories, 23g fat, 45g carbs, 21g protein',
		time: 10
	},
	{
		id: 33,
		name: 'Classic BLT',
		servings: '2',
		ingredients: [
			'4 slices white or sourdough bread, toasted',
			'6 slices cooked bacon',
			'4 leaves lettuce',
			'4 slices tomato',
			'2 tbsp mayonnaise'
		],
		instructions: [
			'Spread mayonnaise on bread slices.',
			'Layer bacon, lettuce, and tomato.',
			'Close sandwich and slice in half.',
			'Serve warm or at room temperature.'
		],
		tags: [
			'sandwich',
			'toasted',
			'bacon',
			'classic',
			'lunch',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '520 calories, 32g fat, 36g carbs, 24g protein',
		time: 15
	},
	{
		id: 34,
		name: 'Turkey Cranberry Club',
		servings: '2',
		ingredients: [
			'6 slices multigrain bread, toasted',
			'6 oz sliced turkey breast',
			'4 slices bacon, cooked',
			'2 tbsp cranberry sauce',
			'2 tbsp mayo',
			'4 leaves lettuce'
		],
		instructions: [
			'Spread mayo and cranberry sauce on toasted bread.',
			'Layer turkey, bacon, and lettuce.',
			'Assemble as triple-decker and slice diagonally.'
		],
		tags: ['sandwich', 'toasted', 'turkey', 'club', 'holiday', 'gluten-free', 'economic', 'easy'],
		nutrition: '650 calories, 34g fat, 48g carbs, 38g protein',
		time: 20
	},
	{
		id: 35,
		name: 'Roast Beef and Horseradish Melt',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'6 oz roast beef, thinly sliced',
			'2 slices provolone cheese',
			'2 tbsp horseradish mayo',
			'1 tbsp butter'
		],
		instructions: [
			'Spread horseradish mayo on bread and layer beef and cheese.',
			'Butter the outside and grill until cheese melts and bread is golden.',
			'Serve warm.'
		],
		tags: ['sandwich', 'toasted', 'beef', 'melt', 'savory', 'fast', 'easy'],
		nutrition: '580 calories, 28g fat, 40g carbs, 36g protein',
		time: 15
	},
	{
		id: 36,
		name: 'Italian Deli Sub',
		servings: '2',
		ingredients: [
			'1 large sub roll',
			'3 oz salami',
			'3 oz ham',
			'2 oz provolone cheese',
			'¼ cup shredded lettuce',
			'4 tomato slices',
			'2 tbsp Italian dressing'
		],
		instructions: [
			'Layer meats, cheese, lettuce, and tomato in sub roll.',
			'Drizzle with Italian dressing.',
			'Close and serve cold.'
		],
		tags: ['sandwich', 'cold', 'italian', 'ham', 'deli', 'fast', 'easy'],
		nutrition: '610 calories, 31g fat, 42g carbs, 40g protein',
		time: 10
	},
	{
		id: 37,
		name: 'Ham and Swiss Toastie',
		servings: '2',
		ingredients: [
			'4 slices rye bread',
			'4 oz sliced ham',
			'2 slices Swiss cheese',
			'1 tbsp Dijon mustard',
			'1 tbsp butter'
		],
		instructions: [
			'Spread mustard on bread, layer ham and Swiss.',
			'Butter outside and grill until golden brown and cheese melts.',
			'Serve warm.'
		],
		tags: ['sandwich', 'toasted', 'ham', 'cheese', 'comfort food', 'fast', 'easy'],
		nutrition: '490 calories, 25g fat, 40g carbs, 28g protein',
		time: 10
	},
	{
		id: 38,
		name: 'Pastrami and Swiss on Rye',
		servings: '2',
		ingredients: [
			'4 slices rye bread',
			'6 oz pastrami',
			'2 slices Swiss cheese',
			'2 tbsp Russian dressing',
			'¼ cup sauerkraut (optional)'
		],
		instructions: [
			'Spread dressing on bread, layer pastrami, cheese, and sauerkraut.',
			'Press sandwich on skillet or serve cold.',
			'Cut and serve.'
		],
		tags: ['sandwich', 'toasted', 'pastrami', 'deli', 'reuben-style', 'fast', 'easy'],
		nutrition: '580 calories, 27g fat, 44g carbs, 35g protein',
		time: 15
	},
	{
		id: 39,
		name: 'Chicken Caesar Sandwich',
		servings: '2',
		ingredients: [
			'4 slices ciabatta bread',
			'1 cup cooked chicken breast, sliced',
			'2 tbsp Caesar dressing',
			'½ cup romaine lettuce, shredded',
			'2 tbsp grated Parmesan'
		],
		instructions: [
			'Toss chicken and lettuce in Caesar dressing.',
			'Spread on ciabatta, sprinkle Parmesan, and close sandwich.',
			'Serve chilled or lightly toasted.'
		],
		tags: [
			'sandwich',
			'cold',
			'chicken',
			'caesar',
			'salad',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '470 calories, 20g fat, 38g carbs, 36g protein',
		time: 10
	},
	{
		id: 40,
		name: 'Pulled Chicken BBQ Sandwich',
		servings: '2',
		ingredients: [
			'2 brioche buns',
			'1 cup pulled chicken',
			'¼ cup barbecue sauce',
			'¼ cup coleslaw'
		],
		instructions: [
			'Warm pulled chicken and toss in barbecue sauce.',
			'Pile onto buns and top with coleslaw.',
			'Serve warm.'
		],
		tags: [
			'sandwich',
			'toasted',
			'chicken',
			'bbq',
			'southern',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '620 calories, 28g fat, 52g carbs, 40g protein',
		time: 15
	},
	{
		id: 41,
		name: 'Turkey Pesto Panini',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'4 oz sliced turkey breast',
			'2 slices mozzarella',
			'2 tbsp pesto',
			'1 tbsp butter'
		],
		instructions: [
			'Spread pesto on bread and layer turkey and mozzarella.',
			'Butter outside and grill in panini press until golden.',
			'Serve hot.'
		],
		tags: [
			'sandwich',
			'toasted',
			'turkey',
			'pesto',
			'panini',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '540 calories, 26g fat, 40g carbs, 34g protein',
		time: 12
	},
	{
		id: 42,
		name: 'Cuban Sandwich',
		servings: '2',
		ingredients: [
			'1 Cuban roll or baguette',
			'4 oz roast pork',
			'2 oz ham',
			'2 slices Swiss cheese',
			'2 tbsp yellow mustard',
			'4 pickle slices',
			'1 tbsp butter'
		],
		instructions: [
			'Assemble sandwich with mustard, meats, cheese, and pickles.',
			'Butter outside and press in skillet until crisp and melty.',
			'Serve hot.'
		],
		tags: ['sandwich', 'toasted', 'pork', 'cuban', 'grilled', 'gluten-free', 'fast', 'easy'],
		nutrition: '680 calories, 34g fat, 44g carbs, 48g protein',
		time: 15
	},
	{
		id: 43,
		name: 'Chicken Bacon Ranch Sandwich',
		servings: '2',
		ingredients: [
			'4 slices Texas toast or sourdough',
			'1 cup cooked chicken breast, shredded',
			'4 slices bacon, cooked',
			'2 tbsp ranch dressing',
			'2 slices cheddar cheese'
		],
		instructions: [
			'Mix chicken with ranch dressing.',
			'Layer chicken, bacon, and cheddar on bread.',
			'Grill until toasted and cheese melts.'
		],
		tags: [
			'sandwich',
			'toasted',
			'chicken',
			'ranch',
			'comfort food',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '610 calories, 30g fat, 42g carbs, 40g protein',
		time: 15
	},
	{
		id: 44,
		name: 'Waygu Cheese Sandwich',
		servings: '2',
		ingredients: [
			'4 slices baguette or ciabatta',
			'6 oz grilled steak, sliced thin',
			'2 tbsp blue cheese crumbles',
			'½ cup arugula',
			'1 tbsp balsamic glaze'
		],
		instructions: [
			'Layer steak, blue cheese, and arugula on bread.',
			'Drizzle with balsamic glaze and close sandwich.',
			'Serve warm or room temperature.'
		],
		tags: ['sandwich', 'cold', 'steak', 'gourmet', 'balsamic'],
		nutrition: '570 calories, 25g fat, 36g carbs, 44g protein',
		time: 20
	},
	{
		id: 45,
		name: 'Tuna Melt Deluxe',
		servings: '2',
		ingredients: [
			'1 can tuna, drained',
			'2 tbsp mayo',
			'1 tsp Dijon mustard',
			'2 slices tomato',
			'2 slices cheddar cheese',
			'4 slices whole wheat bread',
			'1 tbsp butter'
		],
		instructions: [
			'Mix tuna with mayo and mustard.',
			'Assemble sandwich with tuna, tomato, and cheddar.',
			'Butter outside and grill until cheese melts and bread is golden.'
		],
		tags: [
			'sandwich',
			'toasted',
			'tuna',
			'cheese',
			'melt',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '510 calories, 22g fat, 42g carbs, 34g protein',
		time: 10
	},
	{
		id: 46,
		name: 'Smoked Turkey and Brie Baguette',
		servings: '2',
		ingredients: [
			'1 small baguette',
			'4 oz smoked turkey breast',
			'3 oz brie cheese, sliced',
			'1 tbsp honey mustard',
			'½ cup baby spinach'
		],
		instructions: [
			'Spread honey mustard on baguette.',
			'Layer turkey, brie, and spinach.',
			'Close sandwich and serve cold or lightly warmed.'
		],
		tags: ['sandwich', 'cold', 'turkey', 'brie', 'fancy', 'gluten-free', 'fast', 'easy'],
		nutrition: '520 calories, 24g fat, 40g carbs, 34g protein',
		time: 10
	},
	{
		id: 47,
		name: 'Roast Beef and Cheddar Sub',
		servings: '2',
		ingredients: [
			'1 sub roll',
			'6 oz roast beef',
			'2 slices sharp cheddar cheese',
			'2 tbsp creamy horseradish sauce',
			'½ cup shredded lettuce'
		],
		instructions: [
			'Spread horseradish sauce on roll.',
			'Layer roast beef, cheddar, and lettuce.',
			'Close and serve cold or lightly toasted.'
		],
		tags: ['sandwich', 'cold', 'beef', 'cheddar', 'deli', 'gluten-free', 'fast', 'easy'],
		nutrition: '600 calories, 28g fat, 44g carbs, 40g protein',
		time: 10
	},
	{
		id: 48,
		name: 'Truffle Chicken Wrap',
		servings: '1',
		ingredients: [
			'1 large flour tortilla',
			'6 oz grilled chicken breast, sliced',
			'2 tbsp truffle mayo',
			'¼ cup shredded romaine lettuce',
			'2 slices tomato',
			'2 tbsp shredded cheddar cheese',
			'2 tbsp diced red onion'
		],
		instructions: [
			'Spread truffle mayo on tortilla.',
			'Layer chicken, lettuce, tomato, onion, and cheese.',
			'Roll tightly and slice in half.'
		],
		tags: ['wrap', 'chicken', 'fancy', 'lunch', 'gluten-free', 'fast', 'easy'],
		nutrition: '520 calories, 22g fat, 38g carbs, 42g protein',
		time: 10
	},
	{
		id: 49,
		name: 'Turkey Club Wrap',
		servings: '1',
		ingredients: [
			'1 large flour tortilla',
			'4 oz sliced turkey breast',
			'2 slices crispy bacon',
			'2 tbsp mayo',
			'¼ cup shredded lettuce',
			'2 tomato slices'
		],
		instructions: [
			'Spread mayo on tortilla.',
			'Layer turkey, bacon, lettuce, and tomato.',
			'Roll tightly and cut in half.'
		],
		tags: ['wrap', 'turkey', 'bacon', 'classic', 'gluten-free', 'fast', 'easy'],
		nutrition: '480 calories, 20g fat, 35g carbs, 38g protein',
		time: 10
	},
	{
		id: 50,
		name: 'Buffalo Chicken Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz breaded chicken, tossed in buffalo sauce',
			'2 tbsp ranch dressing',
			'¼ cup shredded lettuce',
			'2 tbsp shredded cheddar cheese',
			'2 tbsp diced celery'
		],
		instructions: [
			'Spread ranch dressing on tortilla.',
			'Add buffalo chicken, lettuce, cheese, and celery.',
			'Roll tightly and slice.'
		],
		tags: ['wrap', 'chicken', 'spicy', 'ranch', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '550 calories, 26g fat, 40g carbs, 38g protein',
		time: 12
	},
	{
		id: 51,
		name: 'Chicken Caesar Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz grilled chicken breast',
			'¼ cup chopped romaine lettuce',
			'2 tbsp Caesar dressing',
			'1 tbsp grated parmesan',
			'1 tbsp croutons, crushed'
		],
		instructions: [
			'Toss chicken and lettuce with Caesar dressing.',
			'Add to tortilla with parmesan and croutons.',
			'Roll up and serve.'
		],
		tags: ['wrap', 'chicken', 'salad', 'caesar', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '490 calories, 22g fat, 35g carbs, 36g protein',
		time: 10
	},
	{
		id: 52,
		name: 'Roast Beef and Swiss Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz roast beef, sliced',
			'2 slices Swiss cheese',
			'2 tbsp horseradish mayo',
			'¼ cup baby spinach'
		],
		instructions: [
			'Spread horseradish mayo on tortilla.',
			'Add roast beef, Swiss cheese, and spinach.',
			'Roll tightly and slice diagonally.'
		],
		tags: ['wrap', 'beef', 'swiss', 'deli', 'gluten-free', 'fast', 'easy'],
		nutrition: '560 calories, 27g fat, 36g carbs, 42g protein',
		time: 8
	},
	{
		id: 53,
		name: 'Italian Deli Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'2 oz salami',
			'2 oz ham',
			'2 oz pepperoni',
			'2 slices provolone cheese',
			'2 tbsp Italian dressing',
			'¼ cup shredded lettuce',
			'2 tomato slices'
		],
		instructions: [
			'Drizzle dressing on tortilla.',
			'Layer meats, cheese, lettuce, and tomato.',
			'Roll tightly and cut in half.'
		],
		tags: ['wrap', 'italian', 'meat', 'provolone', 'gluten-free', 'fast', 'easy'],
		nutrition: '600 calories, 30g fat, 38g carbs, 44g protein',
		time: 10
	},
	{
		id: 54,
		name: 'Greek Chicken Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla or pita wrap',
			'6 oz grilled chicken',
			'2 tbsp tzatziki sauce',
			'¼ cup shredded lettuce',
			'2 tbsp diced tomato',
			'2 tbsp diced cucumber',
			'1 tbsp feta cheese'
		],
		instructions: [
			'Spread tzatziki on wrap.',
			'Add chicken, lettuce, tomato, cucumber, and feta.',
			'Roll up tightly and slice.'
		],
		tags: ['wrap', 'chicken', 'greek', 'tzatziki', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '500 calories, 20g fat, 42g carbs, 38g protein',
		time: 10
	},
	{
		id: 55,
		name: 'BBQ Pulled Pork Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'5 oz pulled pork',
			'2 tbsp BBQ sauce',
			'¼ cup coleslaw',
			'2 tbsp shredded cheddar'
		],
		instructions: [
			'Warm pork and toss with BBQ sauce.',
			'Add to tortilla with coleslaw and cheese.',
			'Roll tightly and serve warm or cold.'
		],
		tags: ['wrap', 'pork', 'bbq', 'southern', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '610 calories, 25g fat, 45g carbs, 42g protein',
		time: 12
	},
	{
		id: 56,
		name: 'Ham and Swiss Ranch Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz sliced ham',
			'2 slices Swiss cheese',
			'2 tbsp ranch dressing',
			'¼ cup shredded lettuce'
		],
		instructions: [
			'Spread ranch dressing on tortilla.',
			'Layer ham, Swiss, and lettuce.',
			'Roll tightly and slice.'
		],
		tags: ['wrap', 'ham', 'swiss', 'ranch', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '470 calories, 18g fat, 35g carbs, 38g protein',
		time: 8
	},
	{
		id: 57,
		name: 'Southwest Steak Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'5 oz grilled steak, sliced',
			'2 tbsp chipotle aioli',
			'¼ cup black beans',
			'2 tbsp corn kernels',
			'2 tbsp diced tomato',
			'2 tbsp shredded cheddar cheese'
		],
		instructions: [
			'Spread aioli on tortilla.',
			'Layer steak, beans, corn, tomato, and cheese.',
			'Roll tightly and slice in half.'
		],
		tags: ['wrap', 'steak', 'southwest', 'spicy', 'gluten-free', 'fast', 'easy'],
		nutrition: '590 calories, 24g fat, 44g carbs, 46g protein',
		time: 12
	},
	{
		id: 58,
		name: 'Chicken Bacon Ranch Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz grilled chicken',
			'2 slices bacon, cooked',
			'2 tbsp ranch dressing',
			'¼ cup shredded lettuce',
			'2 tbsp shredded cheddar cheese'
		],
		instructions: [
			'Spread ranch on tortilla.',
			'Add chicken, bacon, lettuce, and cheese.',
			'Roll tightly and slice.'
		],
		tags: ['wrap', 'chicken', 'bacon', 'ranch', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '540 calories, 25g fat, 38g carbs, 41g protein',
		time: 10
	},
	{
		id: 59,
		name: 'Pastrami & Swiss Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'5 oz pastrami',
			'2 slices Swiss cheese',
			'2 tbsp yellow mustard',
			'¼ cup shredded lettuce',
			'2 pickle slices, chopped'
		],
		instructions: [
			'Spread mustard on tortilla.',
			'Layer pastrami, Swiss, lettuce, and pickles.',
			'Roll tightly and serve cold.'
		],
		tags: ['wrap', 'pastrami', 'swiss', 'deli', 'gluten-free', 'fast', 'easy'],
		nutrition: '560 calories, 28g fat, 36g carbs, 42g protein',
		time: 8
	},
	{
		id: 60,
		name: 'Chicken Pesto Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz grilled chicken',
			'2 tbsp basil pesto',
			'¼ cup baby spinach',
			'2 tbsp sun-dried tomatoes',
			'1 slice provolone cheese'
		],
		instructions: [
			'Spread pesto on tortilla.',
			'Add chicken, spinach, sun-dried tomatoes, and provolone.',
			'Roll tightly and slice diagonally.'
		],
		tags: ['wrap', 'chicken', 'pesto', 'italian', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '530 calories, 23g fat, 38g carbs, 39g protein',
		time: 10
	},
	{
		id: 61,
		name: 'Tuna Salad Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'½ cup prepared tuna salad',
			'¼ cup shredded lettuce',
			'2 slices tomato',
			'1 tbsp mayo'
		],
		instructions: [
			'Spread mayo on tortilla.',
			'Add tuna salad, lettuce, and tomato.',
			'Roll up and slice in half.'
		],
		tags: ['wrap', 'tuna', 'seafood', 'lunch', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '490 calories, 22g fat, 34g carbs, 36g protein',
		time: 8
	},
	{
		id: 62,
		name: 'Turkey Cranberry Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'4 oz sliced turkey',
			'2 tbsp cranberry sauce',
			'2 tbsp cream cheese',
			'¼ cup baby spinach'
		],
		instructions: [
			'Spread cream cheese and cranberry sauce on tortilla.',
			'Layer turkey and spinach.',
			'Roll tightly and slice.'
		],
		tags: ['wrap', 'turkey', 'sweet-savory', 'holiday', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '460 calories, 17g fat, 38g carbs, 34g protein',
		time: 8
	},
	{
		id: 63,
		name: 'Italian Chicken Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'6 oz grilled chicken breast',
			'2 tbsp Italian dressing',
			'2 tbsp roasted red peppers',
			'¼ cup romaine lettuce',
			'1 slice provolone cheese'
		],
		instructions: [
			'Drizzle dressing on tortilla.',
			'Add chicken, peppers, lettuce, and provolone.',
			'Roll tightly and slice diagonally.'
		],
		tags: ['wrap', 'chicken', 'italian', 'provolone', 'gluten-free', 'economic', 'fast', 'easy'],
		nutrition: '510 calories, 21g fat, 40g carbs, 37g protein',
		time: 10
	},
	{
		id: 64,
		name: 'Cuban Wrap',
		servings: '1',
		ingredients: [
			'1 large tortilla',
			'2 oz ham',
			'2 oz roasted pork',
			'2 slices Swiss cheese',
			'1 tbsp yellow mustard',
			'2 pickle slices, chopped'
		],
		instructions: [
			'Spread mustard on tortilla.',
			'Add ham, pork, Swiss, and pickles.',
			'Roll tightly and serve warm or cold.'
		],
		tags: ['wrap', 'pork', 'ham', 'swiss', 'cuban', 'gluten-free', 'fast', 'easy'],
		nutrition: '580 calories, 26g fat, 38g carbs, 41g protein',
		time: 10
	},
	{
		id: 65,
		name: 'Smoked Salmon and Dill Cream Sandwich',
		servings: '2',
		ingredients: [
			'4 slices pumpernickel or rye bread',
			'6 oz smoked salmon',
			'3 tbsp dill cream cheese spread',
			'1 tbsp capers',
			'4 slices cucumber',
			'1 tbsp finely sliced red onion'
		],
		instructions: [
			'Spread dill cream cheese on bread slices.',
			'Layer smoked salmon, cucumber, onion, and capers.',
			'Top with remaining bread and cut diagonally.'
		],
		tags: ['sandwich', 'gourmet', 'salmon', 'cold', 'brunch', 'gluten-free', 'fast', 'easy'],
		nutrition: '520 calories, 28g fat, 38g carbs, 28g protein',
		time: 10
	},
	{
		id: 66,
		name: 'Brie, Apple, and Arugula Baguette',
		servings: '2',
		ingredients: [
			'1 small baguette, split',
			'4 oz brie cheese, sliced',
			'½ green apple, thinly sliced',
			'½ cup arugula',
			'1 tbsp honey',
			'1 tbsp butter'
		],
		instructions: [
			'Lightly toast baguette halves.',
			'Layer brie, apple slices, and arugula.',
			'Drizzle with honey and close sandwich.',
			'Serve warm or at room temperature.'
		],
		tags: ['sandwich', 'vegetarian', 'brie', 'apple', 'fancy', 'gluten-free', 'fast', 'easy'],
		nutrition: '610 calories, 29g fat, 54g carbs, 24g protein',
		time: 12
	},
	{
		id: 67,
		name: 'Prosciutto and Fig Jam Panini',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'4 oz prosciutto',
			'2 oz goat cheese',
			'2 tbsp fig jam',
			'½ cup baby arugula',
			'1 tbsp olive oil'
		],
		instructions: [
			'Spread fig jam on bread.',
			'Layer prosciutto, goat cheese, and arugula.',
			'Brush with olive oil and press in panini maker until golden.'
		],
		tags: [
			'sandwich',
			'gourmet',
			'prosciutto',
			'panini',
			'sweet-savory',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '640 calories, 31g fat, 52g carbs, 32g protein',
		time: 15
	},
	{
		id: 68,
		name: 'Caprese Focaccia Sandwich',
		servings: '2',
		ingredients: [
			'1 small focaccia loaf, halved horizontally',
			'4 oz fresh mozzarella, sliced',
			'2 Roma tomatoes, sliced',
			'½ cup basil leaves',
			'1 tbsp balsamic glaze',
			'1 tbsp olive oil'
		],
		instructions: [
			'Brush focaccia with olive oil.',
			'Layer mozzarella, tomato, and basil.',
			'Drizzle with balsamic glaze and close sandwich.'
		],
		tags: [
			'sandwich',
			'vegetarian',
			'caprese',
			'italian',
			'focaccia',
			'gluten-free',
			'fast',
			'easy'
		],
		nutrition: '580 calories, 26g fat, 56g carbs, 28g protein',
		time: 10
	},
	{
		id: 69,
		name: 'Waygu and Blue Cheese Baguette',
		servings: '2',
		ingredients: [
			'1 small baguette, split',
			'6 oz grilled Waygu, sliced',
			'2 tbsp blue cheese crumbles',
			'¼ cup caramelized onions',
			'½ cup arugula',
			'1 tbsp horseradish mayo'
		],
		instructions: [
			'Spread mayo on baguette.',
			'Layer steak, caramelized onions, blue cheese, and arugula.',
			'Press lightly and serve warm.'
		],
		tags: ['sandwich', 'steak', 'blue cheese', 'gourmet', 'hot', 'gluten-free'],
		nutrition: '700 calories, 35g fat, 45g carbs, 48g protein',
		time: 20
	},
	{
		id: 70,
		name: 'Lobster Roll with Lemon Aioli',
		servings: '2',
		ingredients: [
			'2 split-top brioche rolls',
			'6 oz cooked lobster meat, chopped',
			'2 tbsp lemon aioli',
			'1 tbsp diced celery',
			'1 tbsp chives, chopped',
			'1 tbsp butter'
		],
		instructions: [
			'Toast rolls with butter until golden.',
			'Mix lobster, aioli, celery, and chives.',
			'Spoon mixture into rolls and serve chilled or slightly warm.'
		],
		tags: ['sandwich', 'seafood', 'lobster', 'gourmet', 'brunch', 'gluten-free', 'fast'],
		nutrition: '620 calories, 32g fat, 42g carbs, 38g protein',
		time: 15
	},
	{
		id: 71,
		name: 'Duck Confit Sandwich with Orange Marmalade',
		servings: '2',
		ingredients: [
			'4 slices rustic sourdough',
			'6 oz shredded duck confit',
			'2 tbsp orange marmalade',
			'¼ cup arugula',
			'1 tbsp butter'
		],
		instructions: [
			'Spread marmalade on bread.',
			'Add duck and arugula.',
			'Butter exterior and grill until golden and heated through.'
		],
		tags: ['sandwich', 'duck', 'fancy', 'sweet-savory', 'gourmet', 'gluten-free', 'fast'],
		nutrition: '720 calories, 38g fat, 44g carbs, 46g protein',
		time: 20
	},
	{
		id: 72,
		name: 'Truffle Mushroom Melt',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'2 cups mixed mushrooms, sautéed',
			'2 slices gruyère cheese',
			'1 tbsp truffle oil',
			'1 tbsp butter'
		],
		instructions: [
			'Sauté mushrooms with truffle oil until tender.',
			'Assemble sandwich with mushrooms and gruyère.',
			'Butter exterior and grill until melted and crisp.'
		],
		tags: ['sandwich', 'vegetarian', 'mushroom', 'truffle', 'melt', 'gluten-free', 'fast'],
		nutrition: '640 calories, 34g fat, 44g carbs, 28g protein',
		time: 15
	},
	{
		id: 73,
		name: 'Roast Lamb and Mint Yogurt Flatbread',
		servings: '2',
		ingredients: [
			'2 flatbreads or naan',
			'6 oz sliced roast lamb',
			'2 tbsp mint yogurt sauce',
			'¼ cup arugula',
			'1 tbsp pickled red onion'
		],
		instructions: [
			'Spread mint yogurt on flatbread.',
			'Add lamb, arugula, and pickled onions.',
			'Fold and serve warm or cold.'
		],
		tags: ['sandwich', 'lamb', 'gourmet', 'flatbread', 'fusion', 'gluten-free', 'fast'],
		nutrition: '620 calories, 28g fat, 42g carbs, 44g protein',
		time: 12
	},
	{
		id: 74,
		name: 'Crispy Chicken with Honey Mustard Slaw',
		servings: '2',
		ingredients: [
			'2 brioche buns',
			'2 fried chicken breasts',
			'¼ cup coleslaw with honey mustard dressing',
			'2 pickle slices'
		],
		instructions: [
			'Add fried chicken to buns.',
			'Top with slaw and pickles.',
			'Close sandwich and serve warm.'
		],
		tags: [
			'sandwich',
			'chicken',
			'crispy',
			'gourmet',
			'brunch',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '780 calories, 38g fat, 60g carbs, 46g protein',
		time: 20
	},
	{
		id: 75,
		name: 'Roasted Vegetable and Hummus Ciabatta',
		servings: '2',
		ingredients: [
			'1 ciabatta loaf, halved',
			'1 cup roasted bell peppers, zucchini, and eggplant',
			'3 tbsp hummus',
			'¼ cup baby spinach',
			'1 tbsp olive oil'
		],
		instructions: [
			'Brush ciabatta with olive oil and toast lightly.',
			'Spread hummus and layer roasted vegetables and spinach.',
			'Close sandwich and serve warm.'
		],
		tags: [
			'sandwich',
			'vegetarian',
			'roasted',
			'hummus',
			'mediterranean',
			'gluten-free',
			'economic',
			'fast',
			'easy'
		],
		nutrition: '550 calories, 22g fat, 58g carbs, 22g protein',
		time: 15
	},
	{
		id: 76,
		name: 'Crab and Avocado Brioche Roll',
		servings: '2',
		ingredients: [
			'2 brioche rolls',
			'6 oz lump crab meat',
			'½ avocado, sliced',
			'2 tbsp lemon mayo',
			'1 tbsp chives, chopped'
		],
		instructions: [
			'Mix crab with lemon mayo and chives.',
			'Spread avocado on rolls.',
			'Top with crab mixture and serve chilled.'
		],
		tags: ['sandwich', 'seafood', 'crab', 'gourmet', 'brunch', 'gluten-free', 'fast', 'easy'],
		nutrition: '580 calories, 30g fat, 40g carbs, 36g protein',
		time: 12
	},
	{
		id: 77,
		name: 'Short Rib Melt with Caramelized Onions',
		servings: '2',
		ingredients: [
			'4 slices sourdough bread',
			'6 oz braised short rib, shredded',
			'2 slices white cheddar',
			'¼ cup caramelized onions',
			'1 tbsp butter'
		],
		instructions: [
			'Assemble sandwich with short rib, cheese, and onions.',
			'Butter exterior and grill until cheese melts.',
			'Serve warm.'
		],
		tags: ['sandwich', 'beef', 'short rib', 'melt', 'gourmet'],
		nutrition: '740 calories, 38g fat, 44g carbs, 48g protein',
		time: 20
	},
	{
		id: 78,
		name: 'Brie and Roasted Turkey Croissant',
		servings: '2',
		ingredients: [
			'2 large croissants',
			'4 oz roasted turkey slices',
			'2 oz brie cheese',
			'1 tbsp cranberry relish',
			'1 tsp butter'
		],
		instructions: [
			'Slice croissants and butter lightly.',
			'Layer turkey, brie, and cranberry relish.',
			'Warm in oven until cheese softens.'
		],
		tags: ['sandwich', 'turkey', 'brie', 'croissant', 'holiday', 'gluten-free', 'fast', 'easy'],
		nutrition: '610 calories, 32g fat, 40g carbs, 34g protein',
		time: 12
	},
	{
		id: 79,
		name: 'Shrimp Po’ Boy with Remoulade',
		servings: '2',
		ingredients: [
			'2 French rolls',
			'6 oz fried shrimp',
			'¼ cup shredded lettuce',
			'2 tomato slices',
			'2 tbsp remoulade sauce'
		],
		instructions: [
			'Spread remoulade on rolls.',
			'Add shrimp, lettuce, and tomato.',
			'Close and serve immediately.'
		],
		tags: ['sandwich', 'shrimp', 'southern', 'fried', 'gourmet', 'gluten-free', 'economic'],
		nutrition: '720 calories, 36g fat, 54g carbs, 44g protein',
		time: 18
	}
];
