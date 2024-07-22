<script lang="ts">
	import { browser } from "$app/environment"

	export let data

	const details = [
		{ label: "Description", value: data.packageDetail.description },
		{ label: "Version", value: data.packageDetail.version },
		{ label: "License", value: data.packageDetail.license },
	]

	if (data.packageDetail.maintainers) {
		details.push({
			label: "Maintainers",
			value: data.packageDetail.maintainers.map((maintainer) => maintainer.name).join(", "),
		})
	}

	function navBack() {
		if (browser) window.history.back()
	}
</script>

{#if data && data.packageDetail}
	<section>
		<h1>{data.packageDetail.name}</h1>
		<dl>
			{#each details as { label, value }}
				<dt>{label}:</dt>
				<dd>{value}</dd>
			{/each}
		</dl>
		<button on:click={navBack}>Go back</button>
	</section>
{:else}
	<p>Package details not available.</p>
{/if}

<style>
	section {
		padding: var(--spacing-10);
	}

	dt {
		font-weight: var(--font-weight-600);
	}

	dd {
		background-color: var(--color-light-gray);
		margin-bottom: var(--spacing-10);
		padding: var(--spacing-10);
	}

	button {
		background-color: var(--color-black);
		color: var(--color-white);
		padding: var(--spacing-10);
		font-weight: var(--font-weight-600);
		border-radius: var(--border-radius-20);
		border: none;
	}
</style>
