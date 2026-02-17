<script lang="ts">
	const { data } = $props<{
		data: {
			recipes: Array<{
				key_id: number;
				name: string;
				servings: number | null;
				ingredients: string[];
				instructions: string[];
				tags: string[];
				nutrition: string | null;
				time: number | null;
				creator: string;
				category: string;
			}>;
		};
	}>();

	import FavoriteButton from '$lib/FavoriteButton.svelte';
	import DontLikeButton from '$lib/DontLikeButton.svelte';

	let openCategory = $state<string | null>(null);
	let openRecipeId = $state<number | null>(null);

	function toggleCategory(category: string) {
		openCategory = openCategory === category ? null : category;
	}

	function toggleRecipe(id: number) {
		openRecipeId = openRecipeId === id ? null : id;
	}

	function handleFavoriteToggle(recipe, detail) {
		recipe.isFavorite = detail.status === 'added';
	}

	function handleDontLikeToggle(recipe, detail) {
		recipe.isDontLike = detail.status === 'added';
	}

	const grouped = Object.groupBy(data.recipes, (r) => r.category);
</script>

<h1>Edit Recipes</h1>
<main>
	{#each Object.entries(grouped) as [category, recipes]}
		<section class="category-block">
			<h2>
				<button
					type="button"
					class="category-toggle"
					aria-expanded={openCategory === category}
					onclick={() => toggleCategory(category)}
				>
					{category}
					<span aria-hidden="true">
						{openCategory === category ? '▼' : '►'}
					</span>
				</button>
			</h2>
			{#if openCategory === category}
				<div class="grid-Main">
					{#each recipes as recipe}
						<article class="card">
							<h2>
								<button
									type="button"
									class="recipe-toggle"
									aria-expanded={openRecipeId === recipe.key_id}
									onclick={() => toggleRecipe(recipe.key_id)}
								>
									{recipe.name}
									<span aria-hidden="true">
										{openRecipeId === recipe.key_id ? '▼' : '►'}
									</span>
								</button>
							</h2>

							{#if openRecipeId === recipe.key_id}
								<div class="content">
									<p><strong>Servings:</strong> {recipe.servings}</p>
									<p><strong>Time:</strong> {recipe.time}</p>
									<p><strong>Nutrition:</strong> {recipe.nutrition}</p>

									<h3><strong>Ingredients:</strong></h3>
									<ul>
										{#each recipe.ingredients as ingredient}
											<li>{ingredient}</li>
										{/each}
									</ul>

									<h3><strong>Instructions:</strong></h3>
									<ol>
										{#each recipe.instructions as step}
											<li>{step}</li>
										{/each}
									</ol>

									<h3>Tags</h3>
									<ul class="tags">
										{#each recipe.tags as tag}
											<li>{tag}</li>
										{/each}
									</ul>
									<p><strong>Creator:</strong> {recipe.creator}</p>
									<p><strong>Category:</strong> {recipe.category}</p>

									<FavoriteButton
										recipeId={recipe.key_id}
										isFavorite={recipe.isFavorite}
										on:toggled={(e) => handleFavoriteToggle(recipe, e.detail)}
									/>
									<DontLikeButton
										recipeId={recipe.key_id}
										isDontLike={recipe.isDontLike}
										on:toggled={(e) => handleDontLikeToggle(recipe, e.detail)}
									/>
								</div>

								<a href={`/admin/recipes/${recipe.key_id}`}>Edit recipe</a>
							{/if}
						</article>
					{/each}
				</div>
			{/if}
		</section>
	{/each}
</main>

<style>
	.recipe-toggle,
	.category-toggle {
		all: unset;
	}

	.category-toggle {
		margin: 1rem 5rem;

		@media only screen and (min-width: 1024px) {
			margin: 1rem 10rem;
		}

		@media only screen and (min-width: 1440px) {
			margin: 1rem 15rem;
		}
	}

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
		height: fit-content;
	}

	h2,
	h3,
	p {
		margin: 0.5rem 0;
		padding: 0;
		width: fit-content;
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
