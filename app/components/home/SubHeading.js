import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'

export default function SubHeading({ subHeadingTitle }) {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginBottom: 10,
			}}
		>
			<Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium' }}>
				{subHeadingTitle}
			</Text>
			<Text
				style={{
					fontFamily: 'Roboto-Regular',
					color: Colors.PRIMARY,
				}}
			>
				See All
			</Text>
		</View>
	)
}
