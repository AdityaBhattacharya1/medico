import { View } from 'react-native'
import React from 'react'
import Colors from './Colors'

export default function HorizontalLine() {
	return (
		<View
			style={{
				borderBottomWidth: 0.5,
				borderColor: Colors.LIGHT_GRAY,
				margin: 10,
				marginBottom: 10,
			}}
		/>
	)
}
