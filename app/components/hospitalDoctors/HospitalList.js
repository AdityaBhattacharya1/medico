import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import HospitalCard from '../../shared/HospitalCard'

export default function HospitalList({ hospitalList }) {
	return (
		<View style={{ marginTop: 15 }}>
			<FlatList
				data={hospitalList}
				renderItem={({ item, index }) => (
					<TouchableOpacity>
						<HospitalCard hospital={item} />
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
