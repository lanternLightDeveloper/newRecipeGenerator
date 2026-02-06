<script lang="ts">
	let { children } = $props();
</script>

<ul>
	<li><a href="/admin/users">Manage users</a></li>
	<li><a href="/admin/recipes">Manage recipes</a></li>
	<li><a href="/admin/settings">Manage Settings</a></li>
	<li><a href="/admin/password-resets">Pending Password Resets</a></li>
</ul>
<div class="app">
	<main>
		{@render children()}
	</main>
</div>
