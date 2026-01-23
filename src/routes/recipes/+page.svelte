<script>
	export let data;
</script>

<h1>Recipes</h1>

<ul>
	{#each data.recipes as recipe}
		<li>{recipe.name}</li>
	{/each}
</ul>
