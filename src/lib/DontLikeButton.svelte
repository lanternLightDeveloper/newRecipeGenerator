<!-- lib/FavoriteButton  -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let { recipeId, isDontLike, csrfToken } = $props<{
		recipeId: number;
		isDontLike: boolean | number | null;
	}>();

	let dont = $state(Boolean(isDontLike));

	async function toggle() {
		const res = await fetch('/api/dont_like/toggle', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ recipeId })
		});

		if (res.ok) {
			const result = await res.json();
			dont = result.status === 'added';

			dispatch('toggled', {
				recipeId,
				status: result.status
			});
		}
	}
</script>

<button class="favorite-btn" onclick={toggle}>
	{#if dont}
		👎
	{:else}
		👍
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
