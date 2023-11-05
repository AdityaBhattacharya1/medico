import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import HospitalCard from '../../shared/HospitalCard'
import { useNavigation } from '@react-navigation/native'

export default function HospitalList({ hospitalList }) {
	const navigation = useNavigation()
	return (
		<View style={{ marginTop: 15 }}>
			<FlatList
				data={hospitalList}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('Hospital_Detail', {
								hospital: item,
							})
						}
					>
						<HospitalCard hospital={item} />
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
