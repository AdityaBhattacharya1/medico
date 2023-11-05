import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons'

export default function ActionButton() {
	const actionBtnList = [
		{
			id: 1,
			name: 'Website',
			icon: 'earth',
		},
		{
			id: 2,
			name: 'Email',
			icon: 'chatbubble-ellipses',
		},
		{
			id: 3,
			name: 'Phone',
			icon: 'call',
		},
		{
			id: 4,
			name: 'Direction',
			icon: 'map',
		},
		{
			id: 5,
			name: 'Share',
			icon: 'share',
		},
	]
	return (
		<View style={{ marginTop: 15 }}>
			<FlatList
				data={actionBtnList}
				numColumns={5}
				columnWrapperStyle={{
					flex: 1,
					justifyContent: 'space-between',
				}}
				renderItem={({ item, index }) => (
					<TouchableOpacity>
						<View
							style={{
								backgroundColor: Colors.SECONDARY,
								padding: 13,
								borderRadius: 100,
								alignItems: 'center',
							}}
							key={item.id}
						>
							<Ionicons
								name={item.icon}
								size={24}
								color={Colors.PRIMARY}
							/>
						</View>
						<Text
							style={{
								textAlign: 'center',
								fontFamily: 'Roboto-Medium',
								marginTop: 5,
							}}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
