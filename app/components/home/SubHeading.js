import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'

export default function SubHeading({ subHeadingTitle, seeAll = true }) {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginBottom: 10,
				marginTop: 10,
			}}
		>
			<Text style={{ fontSize: 20, fontFamily: 'Roboto-Medium' }}>
				{subHeadingTitle}
			</Text>
			{seeAll && (
				<Text
					style={{
						fontFamily: 'Roboto-Regular',
						color: Colors.PRIMARY,
					}}
				>
					See All
				</Text>
			)}
		</View>
	)
}
