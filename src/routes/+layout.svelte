<script lang="ts">
	import "$lib/stylesheets/stylesheets.css"
	import Header from "$lib/components/Header.svelte"
</script>

<svelte:head>
	<title>PackSearch</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		margin-top: var(--spacing-10);
	}
</style>
