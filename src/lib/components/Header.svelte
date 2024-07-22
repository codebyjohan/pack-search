<script>
	import Search from "./Search.svelte"
	import logo from "$lib/assets/logo.webp"
</script>

<header>
	<a href="/">
		<img src={logo} alt="Logo" />
	</a>
	<Search />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacing-10);
		padding: var(--spacing-10);
	}

	a {
		display: inline-flex;
	}
</style>
