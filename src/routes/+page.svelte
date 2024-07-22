<script lang="ts">
	export let data
</script>

<header>
	<h1>PackSearch</h1>
	<p>A simplified clone of npmjs.com. The package manager for Javascript. Search and view packages.</p>
</header>

{#if data.packages && data.packages.length > 0}
	<section class="card-container">
		{#each data.packages as packageDetail}
			<div class="card">
				<div class="card-header">
					<h2>{packageDetail.name}</h2>
					<a href={packageDetail.homepage} target="_blank"> Website</a>
				</div>
				<hr />
				<p>
					{packageDetail.description}
				</p>
				<a class="view" href={`/package/${packageDetail.name}/${packageDetail.version}`}>View</a>
			</div>
		{/each}
	</section>
{/if}

<style>
	header {
		padding: var(--spacing-15);
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-15);
		margin-top: var(--spacing-10);
		padding: var(--spacing-20);
	}

	.card {
		display: flex;
		flex-direction: column;
		padding: var(--spacing-20);
		border: var(--border-light-gray);
		border-radius: var(--border-radius-10);
		transition: all 0.3s ease;
	}

	.card:hover {
		transform: var(--transform-perspective-rotate);
		background-color: var(--color-light-gray);
		background-image: var(--gradient);
		border: var(--border-black);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: var(--spacing-20);
	}

	.card-header a {
		border-radius: var(--border-radius-10);
		border: var(--border-gray);
		padding: var(--spacing-5);
		text-decoration: none;
	}

	.card-header a:hover {
		border: var(--border-black);
		text-decoration: underline;
	}

	hr {
		color: var(--color-black);
		margin: var(--spacing-10) 0;
		border: 0;
		border-bottom: var(--border-black);
	}

	.view {
		width: max-content;
		background-color: var(--color-black);
		color: var(--color-white);
		margin-top: var(--spacing-10);
		padding: var(--spacing-5);
		text-decoration: none;
	}

	.view:hover {
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		.card-container {
			grid-template-columns: repeat(2, 1fr);
			padding: var(--spacing-15);
		}
	}

	@media (max-width: 600px) {
		.card-container {
			grid-template-columns: repeat(1, 1fr);
			padding: var(--spacing-10);
		}
	}
</style>
