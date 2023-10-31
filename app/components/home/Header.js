import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
	const { isLoaded, isSignedIn, user } = useUser()
	if (!isLoaded || !isSignedIn) return null
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 10,
					alignItems: 'center',
				}}
			>
				<Image
					source={{ uri: user.imageUrl }}
					style={{ width: 45, height: 45, borderRadius: 100 }}
				/>
				<View>
					<Text style={{ fontFamily: 'Roboto-Regular' }}>Hello,</Text>
					<Text style={{ fontSize: 18, fontFamily: 'Roboto-Bold' }}>
						{user.fullName}
					</Text>
				</View>
			</View>
			<Ionicons name="notifications-outline" size={28} color="black" />
		</View>
	)
}
