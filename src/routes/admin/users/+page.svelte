<script>
	export let data;

	// Track which user is currently open
	let openUserId = null;

	// Toggle the open state
	function toggle(id) {
		openUserId = openUserId === id ? null : id;
	}
</script>

<h1>User management</h1>

{#each data.users as user}
	<article class="card">
		<!-- Header: clickable to toggle -->
		<h2 on:click={() => toggle(user.id)}>
			{user.name}
			<span class="arrow">{openUserId === user.id ? '▲' : '▼'}</span>
		</h2>

		<!-- Content: show only if open -->
		{#if openUserId === user.id}
			<div class="content">
				<p><strong>ID:</strong> {user.id}</p>
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>Username:</strong> {user.name}</p>
				<p><strong>Created At:</strong> {user.createdAt}</p>
				<p><strong>Role:</strong> {user.role}</p>
			</div>
		{/if}
	</article>
{/each}

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
</style>
