export type PackageDetail = {
	name: string
	description: string
	version: string
	license: string
	homepage: string
	maintainers: {
		name: string
	}[]
}

export type PackageSearchResult = {
	objects: {
		package: {
			name: string
			description: string
			version: string
			keywords: string[]
			date: string
			publisher: {
				username: string
			}
		}
	}[]
}
