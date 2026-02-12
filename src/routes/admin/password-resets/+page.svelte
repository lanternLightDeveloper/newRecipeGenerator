<script lang="ts">
	let { data, form } = $props();

	// Local reactive state
	let error = $state('');
	let newPassword = $state('');

	// When form updates (after POST), update UI
	$effect(() => {
		if (form?.error) {
			error = form.error;
		}

		if (form?.newPassword) {
			newPassword = form.newPassword;
		}
	});
</script>

<h1>Pending Password Resets</h1>

{#if error}
	<p style="color:red">{error}</p>
{/if}

{#if newPassword}
	<p style="color:green">New password: <strong>{newPassword}</strong></p>
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
		{#each data.resets as reset}
			<tr>
				<td>{reset.email}</td>
				<td>{new Date(reset.expiresAt).toLocaleString()}</td>
				<td>{reset.used ? 'Yes' : 'No'}</td>
				<td>
					{#if !reset.used}
						<form method="POST" action="?/reset">
							<input type="hidden" name="id" value={reset.id} />
							<button type="submit">Reset Password</button>
						</form>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
