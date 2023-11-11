import { View, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Header from '../components/home/Header'

export default function Profile() {
	return (
		<View style={{ padding: 20, marginTop: 20 }}>
			<Header />
			{/* <SignOut /> */}
		</View>
	)
}

const SignOut = () => {
	const { isLoaded, signOut } = useAuth()
	if (!isLoaded) {
		return null
	}
	return (
		<View>
			<Button
				title="Sign Out"
				onPress={() => {
					signOut()
				}}
			/>
		</View>
	)
}
