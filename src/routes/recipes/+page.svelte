<script>
	export let data;
</script>

<h1>Recipes</h1>

<ul>
	{#each data.recipes as recipe}
		<li>{recipe.name}</li>
		<li>{recipe.servings}</li>
		<li>{recipe.ingredients}</li>
		<li>{recipe.instructions}</li>
		<li>{recipe.tags}</li>
	{/each}
</ul>
