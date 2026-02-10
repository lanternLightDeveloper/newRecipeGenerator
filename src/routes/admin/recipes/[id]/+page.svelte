<script lang="ts">
	const { data } = $props();
	let recipe = $state(data.recipe);
</script>

<h1>Edit {recipe.name}</h1>

<form method="POST" action="?/update">
	<input type="hidden" name="id" value={recipe.id} />

	<label>
		Name:
		<input name="name" value={recipe.name} />
	</label>

	<label>
		Servings:
		<input name="servings" type="number" value={recipe.servings} />
	</label>

	<button type="submit">Save</button>
</form>
