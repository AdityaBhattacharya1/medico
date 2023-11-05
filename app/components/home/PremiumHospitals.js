import { View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import globalAPI from '../../services/globalAPI'
import HospitalItem from './HospitalItem'
import { useNavigation } from '@react-navigation/native'

export default function PremiumHospitals() {
	const [hospitalList, setHospitalList] = useState([])
	const navigation = useNavigation()
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
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('Hospital_Detail', {
									hospital: item,
								})
							}
						>
							<HospitalItem hospital={item} />
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	)
}
