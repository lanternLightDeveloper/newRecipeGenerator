<script lang="ts">
	let email = '';
	let password = '';
	let error = '';

	async function submitForm() {
		const res = await fetch('/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		const data = await res.json();

		if (!res.ok) {
			error = data.error;
			return;
		}

		// On success, redirect to profile
		window.location.href = '/profile';
	}
</script>

<form on:submit|preventDefault={submitForm}>
	{#if error}
		<p style="color:red">{error}</p>
	{/if}
	<label>
		Email
		<input type="email" bind:value={email} required />
	</label>
	<label>
		Password
		<input type="password" bind:value={password} required />
	</label>
	<button type="submit">Login</button>
</form>
