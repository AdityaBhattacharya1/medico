import { View, FlatList } from 'react-native'
import React from 'react'
import DoctorCard from '../../shared/DoctorCard'
import ErrorText from '../../shared/ErrorText'

export default function DoctorsList({ doctorList }) {
	return (
		<View style={{ marginTop: 15 }}>
			{doctorList?.length === 0 ? (
				<ErrorText />
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
