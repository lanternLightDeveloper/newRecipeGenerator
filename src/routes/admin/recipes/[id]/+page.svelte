<script lang="ts">
	const { data } = $props();
	let recipe = $state(data.recipe);
</script>

<h1>Edit {recipe.name}</h1>

<form method="POST" action="?/update" class="classicForm">
	<input type="hidden" name="id" value={recipe.id} />

	<label>
		<p>Name:</p>
		<input name="name" value={recipe.name} />
	</label>

	<label>
		<p>Servings:</p>
		<input name="servings" type="number" value={recipe.servings} />
	</label>

	<label>
		<p>Ingredients:</p>
		<textarea name="ingredients">{recipe.ingredients.join('\n')}</textarea>
	</label>

	<label>
		<p>Instructions:</p>
		<textarea name="instructions">{recipe.instructions.join('\n')}</textarea>
	</label>

	<label>
		<p>Tags:</p>
		<input name="tags" value={recipe.tags.join(', ')} />
	</label>

	<label>
		<p>Nutrition:</p>
		<input name="nutrition" value={recipe.nutrition} />
	</label>

	<label>
		<p>Time (minutes):</p>
		<input name="time" type="number" value={recipe.time} />
	</label>

	<label>
		<p>Creator:</p>
		<input name="creator" value={recipe.creator} />
	</label>

	<label>
		<p>Category:</p>
		<input name="category" value={recipe.category} />
	</label>

	<button type="submit">Save</button>
</form>
