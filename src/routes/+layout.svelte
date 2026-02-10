<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	let { children, data } = $props();
</script>

<div class="app">
	<header class="topbar">
		<div class="logo">Table Tango</div>

		<nav class="user-nav">
			{#if data.user}
				<div class="user-menu">
					<a href="/profile" class="user-icon">
						<span>Awesome profile icon!</span>
					</a>

					<div class="dropdown">
						<p>{data.user.email}</p>

						{#if data.user.role === 'admin'}
							<a href="/admin">Admin Panel |</a>
							<a href="/admin/recipes">Recipes Panel |</a>
						{/if}

						{#if data.user.role === 'editor'}
							<a href="/admin/recipes">Recipes Panel</a>
						{/if}

						<a href="/favorites">Favorites</a>
						<form method="POST" action="/logout">
							<button type="submit">Log out</button>
						</form>
					</div>
				</div>
			{:else}
				<a href="/login" class="login-btn">Login</a>
			{/if}
		</nav>
	</header>

	<main>
		{@render children()}
	</main>
</div>

<style>
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.user-menu {
		position: relative;
	}

	.user-icon {
		font-size: 1.5rem;
		cursor: pointer;
	}

	.dropdown {
		position: absolute;
		right: 0;
		top: 2.2rem;
		background: rgb(5, 129, 98);
		border: 1px solid var(--border);
		padding: 0.5rem;
		border-radius: 0.25rem;
		display: none;
	}

	.user-menu:hover .dropdown {
		display: block;
	}
</style>
