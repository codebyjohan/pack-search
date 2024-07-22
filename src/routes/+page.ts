import type { PageLoad } from "./$types"
import type { PackageDetail } from "$lib/types"

import { error } from "@sveltejs/kit"

const featuredPackages = [
	{ name: "svelte", version: "4.2.18" },
	{ name: "react", version: "18.3.0" },
	{ name: "vite", version: "5.3.4" },
	{ name: "eslint", version: "9.7.0" },
	{ name: "nodemon", version: "3.1.4" },
	{ name: "typescript", version: "5.5.3" },
]

export const load = (async ({ fetch }) => {
	const promises: Promise<PackageDetail>[] = featuredPackages.map(async ({ name, version }) => {
		const res = await fetch(`https://registry.npmjs.org/${name}/${version}`)
		if (!res.ok) throw error(404, `Package not found: ${name}@${version}`)
		return res.json()
	})
	const data = await Promise.all(promises)
	return { packages: data }
}) satisfies PageLoad
