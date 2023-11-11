import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

export default function ErrorText() {
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 20,
				gap: 10,
			}}
		>
			<AntDesign name="warning" size={32} color="red" />
			<Text>Error: Data not found or could not be received.</Text>
		</View>
	)
}
