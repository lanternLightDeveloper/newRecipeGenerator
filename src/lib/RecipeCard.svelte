<script>
	import { BaseRecipes } from './data/BaseRecipes.ts';
	let { Recipes } = $props();

	let selectedTerm = $state(null);
	let showBaseRecipe = $state(false);

	function handleGlossaryClick(term) {
		if (selectedTerm === term && showBaseRecipe) {
			showBaseRecipe = false;
		} else {
			selectedTerm = term;
			showBaseRecipe = true;
		}
	}

	let matchingBaseRecipes = $derived(
		Object.keys(BaseRecipes).filter((term) =>
			Recipes.ingredients.some((ing) => new RegExp(`\\b${term}\\b`, 'i').test(ing))
		)
	);
</script>

<article class="card">
	<h2>{Recipes.name}</h2>
	<p><strong>Servings:</strong> {Recipes.servings}</p>
	<p><strong>Time:</strong> {Recipes.time} minutes</p>
	<p><strong>Nutrition:</strong> {Recipes.nutrition}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each Recipes.ingredients as ing}
			<li>{ing}</li>
		{/each}
	</ul>

	<h3>Instructions</h3>
	<ol>
		{#each Recipes.instructions as step}
			<li>{step}</li>
		{/each}
	</ol>

	{#if Recipes.tags?.length}
		<h3>Tags</h3>
		<ul class="tags">
			{#each Recipes.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	{/if}

	<!-- ✅ Only render if there’s at least one match -->
	{#if matchingBaseRecipes.length}
		<div>
			<h3>Base Recipes</h3>
			{#each matchingBaseRecipes as term}
				<button class="btn-Ghost" onclick={() => handleGlossaryClick(term)}>
					{term}
				</button>
			{/each}
		</div>
	{/if}

	{#if showBaseRecipe && selectedTerm}
		<div>
			<h3>{BaseRecipes[selectedTerm].name}</h3>
			<p><strong>Servings:</strong> {BaseRecipes[selectedTerm].servings}</p>
			<p><strong>Time:</strong> {BaseRecipes[selectedTerm].time} minutes</p>
			<p><strong>Nutrition:</strong> {BaseRecipes[selectedTerm].nutrition}</p>

			<h3>Ingredients</h3>
			<ul>
				{#each BaseRecipes[selectedTerm].ingredients as ing}
					<li>{ing}</li>
				{/each}
			</ul>

			<h3>Instructions</h3>
			<ol>
				{#each BaseRecipes[selectedTerm].instructions as step}
					<li>{step}</li>
				{/each}
			</ol>
		</div>
	{/if}
</article>

<style>
	.card {
		background: var(--bg-2);
		padding: 1.5rem;
		border-radius: 1rem;
		border: var(--bord);
		display: flex;
		flex-direction: column;
		margin: 1rem auto;
		width: fit-content;
		max-width: 100%;
	}

	h2,
	h3,
	p {
		margin: 0.5rem 0;
		padding: 0;
	}

	h3 {
		border-bottom: var(--bord);
	}

	ol {
		li {
			margin: 0 1.25rem;
			padding: 0;
		}
	}

	.tags {
		display: flex;
		text-transform: capitalize;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
	}

	.tags li {
		background: var(--hover);
		color: var(--bg-1);
		margin-top: 0.25rem;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
	}
</style>
