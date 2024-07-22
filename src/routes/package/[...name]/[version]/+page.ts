import type { PageLoad } from "./$types"
import type { PackageDetail } from "$lib/types"

import { error } from "@sveltejs/kit"

export const load = (async ({ fetch, params }) => {
	const packageName = Array.isArray(params.name) ? params.name.join("/") : params.name
	const version = params.version
	const res = await fetch(`https://registry.npmjs.org/${packageName}/${version}`)
	if (!res.ok) throw error(404, `Package not found: ${packageName}@${version}`)
	const data: PackageDetail = await res.json()
	return { packageDetail: data }
}) satisfies PageLoad
