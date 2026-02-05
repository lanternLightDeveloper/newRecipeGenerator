<script lang="ts">
	export let data;
	let user = data.user;

	async function updateProfile() {
		// Optional: implement PATCH /profile endpoint to update name/email
		alert('Profile update not implemented yet');
	}
</script>

<h1>Welcome, {user.name}!</h1>
<p>Email: {user.email}</p>

<form on:submit|preventDefault={updateProfile}>
	<label>
		Name
		<input type="text" bind:value={user.name} />
	</label>
	<label>
		Email
		<input type="email" bind:value={user.email} />
	</label>
	<button type="submit">Update Profile</button>
</form>
