<script>
	export let data;
</script>

<h1>Recipes</h1>

{#each data.recipes as recipe}
	<article class="card">
		<h2>{recipe.name}</h2>
		<p>{recipe.id}</p>
		<p>{recipe.servings}</p>
		<ol>
			<li>{recipe.ingredients}</li>
			<li>{recipe.instructions}</li>
			<li>{recipe.tags}</li>
			<li>{recipe.nutrition}</li>
			<li>{recipe.time}</li>
		</ol>
		<p>{recipe.creator}</p>
		<p>{recipe.category}</p>
	</article>
{/each}

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

	h2 {
		margin: 0.5rem 0;
		padding: 0;
		border-bottom: var(--bord);
	}

	p {
		margin: 0.15rem 0;
		padding: 0;
	}

	ol {
		li {
			margin: 0 1.25rem;
			padding: 0;
		}
	}
</style>
