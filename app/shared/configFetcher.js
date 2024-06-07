// configFetcher.js
export const fetchConfig = async () => {
	try {
		const response = await fetch(
			'https://medico-auth-repo.vercel.app/api/hello'
		)
		const config = await response.json()
		return config
	} catch (error) {
		console.error('Error fetching config:', error)
		throw error
	}
}
