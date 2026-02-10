<script lang="ts">
	export let recipeId: number;
	export let isFavorite: boolean;

	async function toggle() {
		const res = await fetch('/api/favorites/toggle', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ recipeId })
		});
		if (res.ok) {
			isFavorite = !isFavorite;
		}
	}
</script>

<button class="favorite-btn" on:click={toggle}>
	{#if isFavorite}
		<span>❤️</span>
	{:else}
		<span>🤍</span>
	{/if}
</button>

<style>
	.favorite-btn {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
	}
</style>
