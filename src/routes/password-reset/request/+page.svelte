<script lang="ts">
	export let data: { csrfToken: string };
	let email = '';
	let error = '';
	let success = '';

	async function submitForm() {
		const res = await fetch('/password-reset/request', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRF-Token': data.csrfToken
			},
			body: JSON.stringify({ email })
		});

		const result = await res.json();
		if (!res.ok) {
			error = result.error;
			return;
		}
		success =
			'A request to reset your password has been sent. I will get back to you soon. This website does not have email password reset enabled.';
		error = '';
	}
</script>

<form on:submit|preventDefault={submitForm}>
	{#if error}<p style="color:red">{error}</p>{/if}
	{#if success}<p style="color:green">{success}</p>{/if}

	<label
		>Email
		<input type="email" bind:value={email} required />
	</label>

	<button type="submit">Request Password Reset</button>
</form>
