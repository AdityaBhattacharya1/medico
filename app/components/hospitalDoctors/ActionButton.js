import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Linking,
	Share,
} from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons'

export default function ActionButton({ hospital }) {
	const actionBtnList = [
		{
			id: 1,
			name: 'Website',
			icon: 'earth',
			action: () =>
				hospital.attributes.Website &&
				Linking.openURL(hospital.attributes.Website),
		},
		{
			id: 2,
			name: 'Email',
			icon: 'mail',
			action: () =>
				hospital.attributes.Email &&
				Linking.openURL(`mailto:${hospital.attributes.Website}`),
		},
		{
			id: 3,
			name: 'Phone',
			icon: 'call',
			action: () =>
				hospital.attributes.Phone &&
				Linking.openURL(`tel:${hospital.attributes.Phone}`),
		},
		{
			id: 4,
			name: 'Direction',
			icon: 'map',
			action: () =>
				hospital.attributes.Address &&
				Linking.openURL(
					`https://www.google.com/maps/search/?api=1&query=${hospital.attributes.Address.slice(
						0,
						60
					)}`
				),
		},
		{
			id: 5,
			name: 'Share',
			icon: 'share',
			action: async () => {
				try {
					const result = await Share.share({
						message: `${hospital.attributes.Name} at ${hospital.attributes.Address}`,
					})
				} catch (error) {
					Alert.alert(error.message)
				}
			},
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
					<TouchableOpacity onPress={item.action}>
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
