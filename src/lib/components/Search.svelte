<script lang="ts">
	import { goto } from "$app/navigation"

	let searchTerm: string = ""

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault()
		if (searchTerm.trim().length === 0) {
			return
		}
		goto(`/search/${searchTerm}`)
		searchTerm = ""
	}
</script>

<div class="search-container">
	<form on:submit={handleSubmit}>
		<span class="icon" aria-hidden="true">🔍</span>
		<input
			id="search"
			class="search-box"
			bind:value={searchTerm}
			placeholder="Search packages"
			aria-label="Search packages" />
		<button class="search-button" aria-label="Submit search">Search</button>
	</form>
</div>

<style>
	.search-container {
		display: inline-flex;
		background-color: var(--color-light-gray);
		border: var(--border-mid-gray);
		transition: border-color 0.3s ease;
	}

	.search-container:focus-within {
		border-color: var(--color-black);
	}

	.icon {
		padding: var(--spacing-5);
	}

	.search-box {
		flex: 1;
		background-color: var(--color-light-gray);
		padding: var(--spacing-10);
		border: none;
		outline: none;
	}

	.search-button {
		background-color: var(--color-black);
		color: var(--color-white);
		padding: var(--spacing-15);
		font-weight: var(--font-weight-600);
		border: 0;
	}

	@media (min-width: 850px) {
		.search-box {
			min-width: 500px;
		}
	}
</style>
