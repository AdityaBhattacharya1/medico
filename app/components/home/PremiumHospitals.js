import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import globalAPI from '../../services/globalAPI'
import HospitalItem from './HospitalItem'

export default function PremiumHospitals() {
	const [hospitalList, setHospitalList] = useState([])
	const getPremiumHospitals = () =>
		globalAPI
			.getPremiumHospitals()
			.then((res) => setHospitalList(res.data.data))
			.catch((e) => {
				console.error(e.message)
				return e
			})
	useEffect(() => {
		getPremiumHospitals()
	}, [])
	return (
		hospitalList && (
			<View style={{ marginTop: 10 }}>
				<SubHeading subHeadingTitle={'Our Premium Hospitals'} />
				<FlatList
					data={hospitalList}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					renderItem={({ item, index }) => (
						<HospitalItem hospital={item} />
					)}
				/>
			</View>
		)
	)
}
