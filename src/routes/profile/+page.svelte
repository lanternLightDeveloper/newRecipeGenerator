<!-- profile/+page.svelte  -->
<script lang="ts">
	let { data } = $props<{
		user: any;
		csrfToken: string;
		favorites: any[];
		userRestrictions: any[];
	}>();

	let name = $state(data.user.name);
	let email = $state(data.user.email);
	let error = $state('');

	let openRecipeId = $state<number | null>(null);

	function toggle(id: number) {
		openRecipeId = openRecipeId === id ? null : id;
	}

	// async function submitForm() {
	// 	const res = await fetch('/profile', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'X-CSRF-Token': data.csrfToken
	// 		},
	// 		body: JSON.stringify({ name, email })
	// 	});

	// 	const result = await res.json();

	// 	if (!res.ok) {
	// 		error = result.error;
	// 		return;
	// 	}

	// 	alert('Profile updated!');
	// }

	let selected = $state(new Set(data.userRestrictions.map((r) => r.restrictionId)));

	async function toggleRestriction(id: number) {
		const res = await fetch('/api/dietary/toggle', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ restrictionId: id })
		});

		if (res.ok) {
			const result = await res.json();

			if (result.status === 'added') {
				selected.add(id);
			} else {
				selected.delete(id);
			}

			// Force reactivity
			selected = new Set(selected);
		}
	}
</script>

<h1>Welcome, {data.user.name}!</h1>
<p>Email: {data.user.email}</p>
<p>Role: {data.user.role}</p>

<!-- <form onsubmit={submitForm}>
	{#if error}
		<p style="color:red">{error}</p>
	{/if}
	<label>Name: <input type="text" bind:value={name} /></label>
	<label>Email: <input type="email" bind:value={email} /></label>
	<button type="submit">Update</button>
</form> -->

<form method="POST">
	{#if error}
		<p style="color:red">{error}</p>
	{/if}

	<label>Name: <input type="text" name="name" bind:value={name} /></label>
	<label>Email: <input type="email" name="email" bind:value={email} /></label>

	<button type="submit">Update</button>
</form>

<form method="POST" action="/logout">
	<button type="submit">Log out</button>
</form>

<h2>Your Dietary Restrictions</h2>

<ul>
	{#each data.allRestrictions as r}
		<li>
			<label>
				<input
					type="checkbox"
					checked={selected.has(r.id)}
					onchange={() => toggleRestriction(r.id)}
				/>
				{r.name}
			</label>
		</li>
	{/each}
</ul>

<h2>Your Favorite Recipes</h2>

{#if data.favorites.length === 0}
	<p>You haven't favorited any recipes yet.</p>
{:else}
	{#each data.favorites as fav}
		<article class="card">
			<button
				type="button"
				class="recipe-toggle"
				aria-expanded={openRecipeId === fav.key_id}
				aria-controls={'recipe-panel-' + fav.key_id}
				onclick={() => toggle(fav.key_id)}
			>
				{fav.name}
				<span class="arrow" aria-hidden="true">
					{openRecipeId === fav.key_id ? '▲' : '▼'}
				</span>
			</button>

			<p>
				<strong>{fav.name}</strong>
			</p>
			<p>Servings: {fav.servings}</p>
			<ol>
				<li>ingredients: {fav.ingredients}</li>
				<li>instructions: {fav.instructions}</li>
				<li>tags: {fav.tags}</li>
				<li>nutrition: {fav.nutrition}</li>
				<li>Time: {fav.time}</li>
			</ol>
			<li>Creator: {fav.creator}</li>
			<li>Category: {fav.category}</li>
		</article>
	{/each}
{/if}

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
