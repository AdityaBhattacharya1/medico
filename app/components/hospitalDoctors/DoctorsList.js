import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import HospitalCard from '../../shared/HospitalCard'
import DoctorCard from '../../shared/DoctorCard'

export default function DoctorsList({ doctorList }) {
	return (
		<View style={{ marginTop: 15 }}>
			<FlatList
				data={doctorList}
				renderItem={({ item, index }) => (
					// <TouchableOpacity>
					<DoctorCard doctors={item} />
					// </TouchableOpacity>
				)}
			/>
		</View>
	)
}
