<script>
	export let data;
</script>

<h1>Recipes</h1>

{#each data.recipes as recipe}
	<h1>{recipe.name}</h1>
	<ul>
		<li>{recipe.id}</li>
		<li>{recipe.servings}</li>
		<li>{recipe.ingredients}</li>
		<li>{recipe.instructions}</li>
		<li>{recipe.tags}</li>
		<li>{recipe.nutrition}</li>
		<li>{recipe.time}</li>
		<li>{recipe.creator}</li>
		<li>{recipe.category}</li>
	</ul>
{/each}
