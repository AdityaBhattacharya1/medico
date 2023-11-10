import { View, Button } from 'react-native'
import React from 'react'
import { SignedOut, useAuth } from '@clerk/clerk-expo'

export default function Profile() {
	return (
		<View style={{ marginTop: 50 }}>
			<SignOut />
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
