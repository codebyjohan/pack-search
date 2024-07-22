<script lang="ts">
	export let data
</script>

{#if data.packages && data.packages.length > 0}
	{#each data.packages as { package: packageItem }}
		<section>
			<a href={`/package/${packageItem.name}/${packageItem.version}`}>{packageItem.name}</a>
			<p>{packageItem.description}</p>
			{#if packageItem.keywords}
				<p class="keywords-container">
					Keywords: {#each packageItem.keywords as keyword}
						<span class="keywords">{keyword}</span>
					{/each}
				</p>
			{/if}
			<div class="package-info">
				<p>Publisher: {packageItem.publisher.username}</p>
				<p>v{packageItem.version}</p>
				<p>Date: {new Date(packageItem.date).toISOString().split("T")[0]}</p>
			</div>
		</section>
	{/each}
{:else}
	<p>No packages found for the search term you provided.</p>
{/if}

<style>
	section {
		border-bottom: var(--border-light-gray);
		padding: var(--spacing-10);
	}

	.package-info,
	p {
		display: flex;
		flex-wrap: wrap;
	}

	.keywords-container {
		display: flex;
		align-items: center;
		gap: var(--spacing-5);
	}

	.keywords {
		background-color: var(--color-light-gray);
		padding: var(--spacing-5);
	}

	a {
		font-weight: var(--font-weight-600);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	a,
	p {
		padding: var(--spacing-5);
	}
</style>
