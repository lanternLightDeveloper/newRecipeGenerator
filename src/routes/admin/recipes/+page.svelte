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

	let openRecipeId = $state<number | null>(null);

	function toggle(key_id: number) {
		openRecipeId = openRecipeId === key_id ? null : key_id;
	}
</script>

{#each data.recipes as recipe}
	<article class="card">
		<h2>
			<button
				type="button"
				class="recipe-toggle"
				aria-expanded={openRecipeId === recipe.key_id}
				aria-controls={'recipe-panel-' + recipe.key_id}
				onclick={() => toggle(recipe.key_id)}
			>
				{recipe.name}
				<span class="arrow" aria-hidden="true">
					{openRecipeId === recipe.key_id ? '▲' : '▼'}
				</span>
			</button>
		</h2>

		{#if openRecipeId === recipe.key_id}
			<div id={'recipe-panel-' + recipe.key_id} class="content">
				<p><strong>KEY_ID:</strong> {recipe.key_id}</p>
				<p><strong>Servings:</strong> {recipe.servings}</p>

				<p><strong>Ingredients:</strong></p>
				<ul>
					{#each recipe.ingredients as ing}
						<li>{ing}</li>
					{/each}
				</ul>

				<p><strong>Instructions:</strong></p>
				<ol>
					{#each recipe.instructions as step}
						<li>{step}</li>
					{/each}
				</ol>

				<p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
				<p><strong>Nutrition:</strong> {recipe.nutrition}</p>
				<p><strong>Time:</strong> {recipe.time}</p>
				<p><strong>Creator:</strong> {recipe.creator}</p>
				<p><strong>Category:</strong> {recipe.category}</p>

				<a href={`/admin/recipes/${recipe.key_id}`}>Edit recipe</a>
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
