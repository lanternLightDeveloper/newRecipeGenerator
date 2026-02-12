<!-- lib/FavoriteButton  -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let { recipeId, isFavorite, csrfToken } = $props<{
		recipeId: number;
		isFavorite: boolean;
		csrfToken: string;
	}>();
	// Local reactive state
	let fav = $state(Boolean(isFavorite));

	async function toggle() {
		const res = await fetch('/api/favorites/toggle', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
			body: JSON.stringify({ recipeId })
		});

		if (res.ok) {
			const result = await res.json();

			fav = result.status === 'added';

			dispatch('toggled', {
				recipeId,
				status: result.status
			});
		}
	}
</script>

<button class="favorite-btn" onclick={toggle}>
	{#if fav}
		❤️
	{:else}
		🤍
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
