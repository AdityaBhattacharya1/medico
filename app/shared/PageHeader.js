import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PageHeader({ title, backButton = true }) {
	const navigation = useNavigation()
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: 15,
				alignItems: 'center',
				marginTop: 25,
			}}
		>
			{backButton && (
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name="chevron-back" size={30} color="black" />
				</TouchableOpacity>
			)}
			<Text style={{ fontSize: 25, fontFamily: 'Roboto-Medium' }}>
				{title}
			</Text>
		</View>
	)
}
