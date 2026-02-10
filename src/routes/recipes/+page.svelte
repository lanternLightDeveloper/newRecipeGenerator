<!-- routes/recipes/+page.svelte  -->

<script lang="ts">
	let { data } = $props();

	import FavoriteButton from '$lib/FavoriteButton.svelte';
	import DontLikeButton from '$lib/DontLikeButton.svelte';

	let openRecipeId = $state<number | null>(null);

	function toggle(id: number) {
		openRecipeId = openRecipeId === id ? null : id;
	}

	function handleFavoriteToggle(recipe, detail) {
		// Update the recipe's isFavorite value in the parent list
		recipe.isFavorite = detail.status === 'added';
	}
	function handleDontLikeToggle(recipe, detail) {
		// Update the recipe's isDontLike value in the parent list
		recipe.isDontLike = detail.status === 'added';
	}
</script>

<h1>Recipes</h1>

{#each data.recipes as recipe}
	<article class="card">
		<h2 onclick={() => toggle(recipe.key_id)}>
			{recipe.name}
			<span class="arrow">
				{openRecipeId === recipe.key_id ? '▲' : '▼'}
			</span>
		</h2>

		{#if openRecipeId === recipe.key_id}
			<div class="content">
				<p><strong>ID:</strong> {recipe.id}</p>
				<p><strong>Servings:</strong> {recipe.servings}</p>

				<ol>
					<li><strong>Ingredients:</strong> {recipe.ingredients}</li>
					<li><strong>Instructions:</strong> {recipe.instructions}</li>
					<li><strong>Tags:</strong> {recipe.tags}</li>
					<li><strong>Nutrition:</strong> {recipe.nutrition}</li>
					<li><strong>Time:</strong> {recipe.time}</li>
				</ol>

				<p><strong>Creator:</strong> {recipe.creator}</p>
				<p><strong>Category:</strong> {recipe.category}</p>

				<FavoriteButton
					recipeId={recipe.key_id}
					isFavorite={recipe.isFavorite}
					on:toggled={(e) => handleFavoriteToggle(recipe, e.detail)}
				/>
				<DontLikeButton
					recipeId={recipe.key_id}
					isFavorite={recipe.isDontLike}
					on:toggled={(e) => handleDontLikeToggle(recipe, e.detail)}
				/>
			</div>
		{/if}
	</article>
{/each}

<style>
	.card {
		background: var(--bg-2);
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		border: var(--bord);
		margin: 1rem auto;
		width: fit-content;
		max-width: 100%;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	h2 {
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: var(--bord);
		padding-bottom: 0.5rem;
	}

	.arrow {
		font-size: 0.9rem;
	}

	.content {
		margin-top: 1rem;
	}

	p {
		margin: 0.15rem 0;
	}

	ol {
		margin: 0.5rem 0 0.5rem 1.5rem;
		padding: 0;
	}

	ol li {
		margin: 0.25rem 0;
	}
</style>
