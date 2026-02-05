<script lang="ts">
	export let data: { user: any; csrfToken: string };
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
<p>Email: {data.user.role}</p>

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
