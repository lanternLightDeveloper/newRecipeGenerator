<script>
	import { data } from '$app/state';
</script>

<h1>Recipes</h1>

<ul>
	{#each $data.recipes as recipe}
		<li>{recipe.name}</li>
	{/each}
</ul>
