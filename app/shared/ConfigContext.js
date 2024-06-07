// ConfigContext.js
import React, { createContext, useState, useEffect, useContext } from 'react'
import { fetchConfig } from './configFetcher'
import { View, Text } from 'react-native'

const ConfigContext = createContext()

export const ConfigProvider = ({ children }) => {
	const [config, setConfig] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadConfig = async () => {
			try {
				const configData = await fetchConfig()
				setConfig(configData)
			} catch (error) {
				console.error('Error loading config:', error)
			} finally {
				setLoading(false)
			}
		}

		loadConfig()
	}, [])

	if (loading) {
		return (
			// You can customize this loading view
			<View>
				<Text>Loading configuration...</Text>
			</View>
		)
	}

	return (
		<ConfigContext.Provider value={config}>
			{children}
		</ConfigContext.Provider>
	)
}

export const useConfig = () => useContext(ConfigContext)

export const getConfig = async () => {
	if (!config) {
		await loadConfig()
	}
	return config
}
