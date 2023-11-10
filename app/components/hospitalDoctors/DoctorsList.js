import { View, FlatList, Text } from 'react-native'
import React from 'react'
import DoctorCard from '../../shared/DoctorCard'

export default function DoctorsList({ doctorList }) {
	return (
		<View style={{ marginTop: 15 }}>
			{doctorList.length === 0 ? (
				<Text>not found</Text>
			) : (
				<FlatList
					data={doctorList}
					renderItem={({ item, index }) => (
						<DoctorCard doctors={item} />
					)}
				/>
			)}
		</View>
	)
}
