<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import type { Recipe } from '$lib/data/Recipes';

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

	//  🦕  🦖🦖🦖 🦕 🦕    Vari      💀= 💣 🌠

	let includeBreakTater = $state(false);
	let includeEggs = $state(false);
	let includeParfait = $state(false);
	let includePancakes = $state(false);
	let includeSandwiches = $state(false);
	let includeSoup = $state(false);
	let includeStarch = $state(false);
	let includeVeg = $state(false);
	let includeMain = $state(false);
	let includeDessert = $state(false);

	let glutenFreeOnly = $state(false);
	let vegetarianFriendly = $state(false);
	let economic = $state(false);
	let fastComplete = $state(false);
	let easyComplete = $state(false);

	let meal = $state<{
		breakTater?: Recipe;
		eggs?: Recipe;
		parfait?: Recipe;
		pancakes?: Recipe;
		starch?: Recipe;
		veg?: Recipe;
		sandwiches?: Recipe;
		soup?: Recipe;
		main?: Recipe;
		dessert?: Recipe;
	}>({});

	let selectedIngredients = $state({
		starch: {
			rice: false,
			potatoes: false,
			noodles: false
		},
		vegetables: {
			tofu: false,
			broccoli: false,
			carrots: false,
			corn: false,
			mushrooms: false
		},
		meats: {
			chicken: false,
			pork: false,
			beef: false,
			tuna: false,
			salmon: false,
			shrimp: false
		}
	});

	//  🦕  🦖🦖🦖 🦕 🦕    Generate Meal button      💀= 💣 🌠

	function generateMeal() {
		const newMeal: typeof meal = {};

		function getRandomRecipe(list, category) {
			let filtered = list;

			if (glutenFreeOnly) filtered = filtered.filter((r) => r.tags?.includes('gluten-free'));
			if (vegetarianFriendly) filtered = filtered.filter((r) => r.tags?.includes('vegetarian'));
			if (economic) filtered = filtered.filter((r) => r.tags?.includes('economic'));
			if (fastComplete) filtered = filtered.filter((r) => r.tags?.includes('fast'));
			if (easyComplete) filtered = filtered.filter((r) => r.tags?.includes('easy'));

			const dinnerCategories = ['starch', 'veg', 'main'];
			if (dinnerCategories.includes(category)) {
				const activeIngredients = Object.entries(selectedIngredients).flatMap(([_, group]) =>
					Object.entries(group)
						.filter(([_, checked]) => checked)
						.map(([ingredient]) => ingredient.toLowerCase())
				);

				if (activeIngredients.length) {
					filtered = filtered.filter((recipe) =>
						activeIngredients.some((ing) =>
							recipe.ingredients.some((i) => i.toLowerCase().includes(ing))
						)
					);
				}
			}

			if (!filtered.length) return null;
			return filtered[Math.floor(Math.random() * filtered.length)];
		}

		if (includeBreakTater && BreakTater.length)
			newMeal.breakTater = getRandomRecipe(BreakTater, 'breakTater');
		if (includeEggs && Eggs.length) newMeal.eggs = getRandomRecipe(Eggs, 'eggs');
		if (includeParfait && ParfaitShakes.length)
			newMeal.parfait = getRandomRecipe(ParfaitShakes, 'parfait');
		if (includePancakes && Pancakes.length)
			newMeal.pancakes = getRandomRecipe(Pancakes, 'pancakes');
		if (includeStarch && Starch.length) newMeal.starch = getRandomRecipe(Starch, 'starch');
		if (includeVeg && Vegetables.length) newMeal.veg = getRandomRecipe(Vegetables, 'veg');
		if (includeSandwiches && Sandwiches.length)
			newMeal.sandwiches = getRandomRecipe(Sandwiches, 'sandwiches');
		if (includeSoup && Soups.length) newMeal.soup = getRandomRecipe(Soups, 'soup');
		if (includeMain && Mains.length) newMeal.main = getRandomRecipe(Mains, 'main');
		if (includeDessert && Desserts.length) newMeal.dessert = getRandomRecipe(Desserts, 'dessert');

		meal = newMeal;
	}

	//  🦕  🦖🦖🦖 🦕 🦕    Save Meal as .TXT      💀= 💣 🌠

	function saveMealAsText() {
		let text = '--- Your Meal ---\n\n';

		for (const [key, recipe] of Object.entries(meal)) {
			if (!recipe) continue;
			text += `${key.toUpperCase()}: ${recipe.name}\n`;
			text += `Servings: ${recipe.servings}\n`;
			text += `Time: ${recipe.time} minutes\n`;
			text += `Nutrition: ${recipe.nutrition}\n\nIngredients:\n`;
			recipe.ingredients.forEach((ing) => (text += `- ${ing}\n`));
			text += '\nInstructions:\n';
			recipe.instructions.forEach((step, i) => (text += `${i + 1}. ${step}\n`));
			text += '\n----------------------\n\n';
		}

		const blob = new Blob([text], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'meal.txt';
		a.click();
		URL.revokeObjectURL(url);
	}

	//  🦕  🦖🦖🦖 🦕 🦕    Reroll button      💀= 💣 🌠

	function reroll(category: keyof typeof meal) {
		const sources = {
			breakTater: BreakTater,
			eggs: Eggs,
			parfait: ParfaitShakes,
			pancakes: Pancakes,
			starch: Starch,
			veg: Vegetables,
			sandwiches: Sandwiches,
			soup: Soups,
			main: Mains,
			dessert: Desserts
		};

		const list = sources[category];
		if (!list?.length) return;

		let filtered = list;

		if (glutenFreeOnly) filtered = filtered.filter((r) => r.tags?.includes('gluten-free'));
		if (vegetarianFriendly) filtered = filtered.filter((r) => r.tags?.includes('vegetarian'));
		if (economic) filtered = filtered.filter((r) => r.tags?.includes('economic'));
		if (fastComplete) filtered = filtered.filter((r) => r.tags?.includes('fast'));
		if (easyComplete) filtered = filtered.filter((r) => r.tags?.includes('easy'));

		const dinnerCategories = ['starch', 'veg', 'main'];
		if (dinnerCategories.includes(category)) {
			const activeIngredients = Object.entries(selectedIngredients).flatMap(([_, group]) =>
				Object.entries(group)
					.filter(([_, checked]) => checked)
					.map(([ingredient]) => ingredient.toLowerCase())
			);

			if (activeIngredients.length) {
				filtered = filtered.filter((recipe) =>
					activeIngredients.some((ing) =>
						recipe.ingredients.some((i) => i.toLowerCase().includes(ing))
					)
				);
			}
		}

		if (filtered.length) {
			const randomRecipe = filtered[Math.floor(Math.random() * filtered.length)];
			meal = { ...meal, [category]: randomRecipe };
		}
	}

	//  🦕  🦖🦖🦖 🦕 🦕    Menus/Filters      💀= 💣 🌠

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let isTuningOpen = $state(false);

	function showMoreFineTuning() {
		isTuningOpen = !isTuningOpen;
	}
</script>

<main>
	<div class:open={isMenuOpen}>
		{#if isMenuOpen}
			<section class="block-Selection-List">
				<article class="controls">
					<p>Guides</p>
					<br />
					<label for="MakeGf">
						<a style="color: var(--txt-1);" href="/MakeGf">Gluten free guide</a>
					</label>

					<label for="MakeVeg">
						<a style="color: var(--txt-1);" href="/MakeVeg">Vegetarian swap guide</a>
					</label>
					<p class="double-Block">Keywords</p>

					<label>
						<input type="checkbox" bind:checked={glutenFreeOnly} /> Gluten-Free
					</label>
					<label>
						<input type="checkbox" bind:checked={vegetarianFriendly} /> Vegetarian
					</label>
					<label>
						<input type="checkbox" bind:checked={economic} /> Economic
					</label>
					<label>
						<input type="checkbox" bind:checked={fastComplete} /> Fast
					</label>
					<label>
						<input type="checkbox" bind:checked={easyComplete} /> Easy
					</label>

					<br />
					<br />
					<p class="double-Block">Meal Options</p>
					<br />
					<br />
					<p class="double-Block">Breakfast</p>
					<label><input type="checkbox" bind:checked={includeBreakTater} /> Breakfast Starch</label>
					<label><input type="checkbox" bind:checked={includeEggs} /> Eggs</label>
					<label><input type="checkbox" bind:checked={includePancakes} /> Pancakes+</label>
					<label><input type="checkbox" bind:checked={includeParfait} /> Shakes/Parfaits</label>
					<br />
					<p class="double-Block">Lunch</p>
					<label><input type="checkbox" bind:checked={includeSandwiches} /> Sandwiches</label>
					<label><input type="checkbox" bind:checked={includeSoup} /> Soup</label>
					<br />
					<p class="double-Block">Dinner</p>
					<label><input type="checkbox" bind:checked={includeStarch} /> Starch</label>
					<label><input type="checkbox" bind:checked={includeVeg} /> Vegetable</label>
					<label><input type="checkbox" bind:checked={includeMain} /> Main</label>
					<br />
					<p class="double-Block">Sweets</p>
					<label><input type="checkbox" bind:checked={includeDessert} /> Dessert</label>

					<button
						class="btn-Ghost double-Block"
						onclick={showMoreFineTuning}
						onkeydown={() => (isTuningOpen = false)}
					>
						Optional: Filter by Ingredients & Fine tune your choices
					</button>

					{#if isTuningOpen}
						<section class="double-Block">
							<h2>Dinner filter</h2>
							<div class="ingredient-filters">
								{#each Object.entries(selectedIngredients) as [group, items]}
									<p>{group.charAt(0).toUpperCase() + group.slice(1)}</p>
									<div class="filter-group">
										{#each Object.entries(items) as [ingredient, checked]}
											<label>
												<input
													type="checkbox"
													bind:checked={selectedIngredients[group][ingredient]}
												/>
												{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
											</label>
										{/each}
									</div>
								{/each}
							</div>
						</section>
					{/if}

					<div class="double-Block">
						<button class="btn-Fill" onclick={generateMeal}><span> Generate Meal </span></button>
						<button class="btn-Fill" onclick={saveMealAsText} disabled={!Object.keys(meal).length}>
							<span> Save Meal as .TXT </span>
						</button>
					</div>
				</article>
			</section>
		{/if}
	</div>

	<button
		class="btn-Ghost"
		style="margin: 1rem 42%;"
		onclick={toggleMenu}
		onkeydown={() => (isMenuOpen = false)}
	>
		Menu
	</button>

	<section class="grid-Main">
		{#if meal.breakTater}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('breakTater')}
					>Reroll Breakfast Starch</button
				>
				<RecipeCard Recipes={meal.breakTater} />
			</div>
		{/if}

		{#if meal.eggs}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('eggs')}>Reroll Eggs</button>
				<RecipeCard Recipes={meal.eggs} />
			</div>
		{/if}

		{#if meal.pancakes}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('pancakes')}>Reroll Pancakes+</button>
				<RecipeCard Recipes={meal.pancakes} />
			</div>
		{/if}

		{#if meal.parfait}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('parfait')}>Reroll Shakes/Parfaits</button>
				<RecipeCard Recipes={meal.parfait} />
			</div>
		{/if}
		{#if meal.starch}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('starch')}>Reroll Starch</button>
				<RecipeCard Recipes={meal.starch} />
			</div>
		{/if}

		{#if meal.veg}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('veg')}>Reroll Vegetable</button>
				<RecipeCard Recipes={meal.veg} />
			</div>
		{/if}

		{#if meal.sandwiches}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('sandwiches')}>Reroll Sandwich</button>
				<RecipeCard Recipes={meal.sandwiches} />
			</div>
		{/if}

		{#if meal.soup}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('soup')}>Reroll Soup</button>
				<RecipeCard Recipes={meal.soup} />
			</div>
		{/if}

		{#if meal.main}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('main')}>Reroll Main</button>
				<RecipeCard Recipes={meal.main} />
			</div>
		{/if}

		{#if meal.dessert}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('dessert')}>Reroll Dessert</button>
				<RecipeCard Recipes={meal.dessert} />
			</div>
		{/if}
	</section>
</main>
