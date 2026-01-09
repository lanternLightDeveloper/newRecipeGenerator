<script lang="ts">
	import '$lib/styles/baseCamp.svelte';

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>
</div>
