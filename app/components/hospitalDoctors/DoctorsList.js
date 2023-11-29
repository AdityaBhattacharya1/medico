import { View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import DoctorCard from '../../shared/DoctorCard'
import ErrorText from '../../shared/ErrorText'
import { LogBox } from 'react-native'

export default function DoctorsList({ doctorList }) {
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
	}, [])
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
