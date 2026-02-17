<script lang="ts">
	import '$lib/styles/baseCamp.svelte';
	import Profile from '$lib/images/profile.png';
	let { children, data } = $props();
</script>

<div class="app">
	<header class="topbar">
		<a href="/" class="logo">Table Tango</a>

		<nav class="user-nav">
			{#if data.user}
				<div class="user-menu">
					<a href="/profile" class="user-icon">
						<span> <img src={Profile} alt="" /> </span>
					</a>

					<div class="dropdown">
						<p>{data.user.email}</p>

						{#if data.user.role === 'admin'}
							<a href="/admin">Admin Panel </a>
							<a href="/admin/recipes">Recipes Panel </a>
						{/if}

						{#if data.user.role === 'editor'}
							<a href="/admin/recipes">Recipes Panel</a>
						{/if}

						<a href="/favorites">Favorites</a>
						<form method="POST" action="/logout">
							<button type="submit" class="btn-Ghost">Log out</button>
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
		cursor: pointer;
	}

	img {
		width: 8rem;
	}

	.dropdown {
		position: absolute;
		right: 0;
		top: 5rem;
		background: var(--bg-2);
		border: 1px solid var(--border);
		padding: 0.5rem;
		border-radius: 0.25rem;
		display: none;

		p,
		a {
			margin: 0.5rem 0;
			padding: 0;
		}
	}

	.user-menu:hover .dropdown {
		display: block;
	}
</style>
