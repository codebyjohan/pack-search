import type { PageLoad } from "./$types"
import type { PackageSearchResult } from "$lib/types"

import { error } from "@sveltejs/kit"

export const load = (async ({ fetch, params }) => {
	const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${params.term}`)
	if (!res.ok) throw error(404, `Packages not found for term: ${params.term}`)
	const data: PackageSearchResult = await res.json()
	return { packages: data.objects }
}) satisfies PageLoad
