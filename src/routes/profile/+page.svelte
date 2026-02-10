<!-- profile/+page.svelte  -->

<script lang="ts">
	export let data: { user: any; csrfToken: string; favorites: any[] };
	let name = data.user.name;
	let email = data.user.email;
	let error = '';

	async function submitForm() {
		const res = await fetch('/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': data.csrfToken
			},
			body: JSON.stringify({ name, email })
		});

		const result = await res.json();

		if (!res.ok) {
			error = result.error;
			return;
		}

		alert('Profile updated!');
	}
</script>

<h1>Welcome, {data.user.name}!</h1>
<p>Email: {data.user.email}</p>
<p>Role: {data.user.role}</p>

<form on:submit|preventDefault={submitForm}>
	{#if error}
		<p style="color:red">{error}</p>
	{/if}
	<label>Name: <input type="text" bind:value={name} /></label>
	<label>Email: <input type="email" bind:value={email} /></label>
	<button type="submit">Update</button>
</form>

<form method="POST" action="/logout">
	<button type="submit">Log out</button>
</form>

<h2>Your Favorite Recipes</h2>

{#if data.favorites.length === 0}
	<p>You haven't favorited any recipes yet.</p>
{:else}
	<ul>
		{#each data.favorites as fav}
			<li>
				<strong>{fav.name}</strong>
			</li>
			<li>Servings: {fav.servings}</li>
			<li>ingredients: {fav.ingredients}</li>
			<li>instructions: {fav.instructions}</li>
			<li>tags: {fav.tags}</li>
			<li>nutrition: {fav.nutrition}</li>
			<li>Time: {fav.time}</li>
			<li>Creator: {fav.creator}</li>
			<li>Category: {fav.category}</li>
		{/each}
	</ul>
{/if}
