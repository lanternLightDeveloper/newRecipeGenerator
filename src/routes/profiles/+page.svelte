<script>
	export let data;
</script>

<h1>Hello {data.user.name}</h1>

<p>Your groups: {data.user.groups.join(', ')}</p>
<h1>This worked?</h1>
