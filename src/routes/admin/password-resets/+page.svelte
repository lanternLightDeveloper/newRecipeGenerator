<script lang="ts">
	import { onMount } from 'svelte';
	let resets = [];
	let error = '';

	async function fetchResets() {
		const res = await fetch('/admin/password-resets');
		const data = await res.json();
		if (!res.ok) {
			error = data.error;
			return;
		}
		resets = data.resets;
	}

	async function resetPassword(id: string) {
		const res = await fetch('/admin/password-resets', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ resetId: id })
		});
		const data = await res.json();
		if (!res.ok) {
			error = data.error;
			return;
		}
		alert(`New password: ${data.newPassword}`);
		fetchResets(); // refresh list
	}

	onMount(fetchResets);
</script>

<h1>Pending Password Resets</h1>
{#if error}
	<p style="color:red">{error}</p>
{/if}

<table>
	<thead>
		<tr>
			<th>Email</th>
			<th>Expires At</th>
			<th>Used</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		{#each resets as reset}
			<tr>
				<td>{reset.email}</td>
				<td>{new Date(reset.expiresAt).toLocaleString()}</td>
				<td>{reset.used}</td>
				<td>
					{#if reset.used === 'false'}
						<button on:click={() => resetPassword(reset.id)}>Reset Password</button>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
