<script>
	export let data;

	// Track which recipe is currently open
	let openRecipeId = null;

	// Toggle the open state
	function toggle(id) {
		openRecipeId = openRecipeId === id ? null : id;
	}
</script>

<h1>Recipes</h1>

{#each data.recipes as recipe}
	<article class="card">
		<!-- Header: clickable to toggle -->
		<h2 on:click={() => toggle(recipe.id)}>
			{recipe.name}
			<span class="arrow">{openRecipeId === recipe.id ? '▲' : '▼'}</span>
		</h2>

		<!-- Content: show only if open -->
		{#if openRecipeId === recipe.id}
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
