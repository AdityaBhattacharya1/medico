import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../shared/PageHeader'
import HospitalInfo from '../components/hospitalDoctors/HospitalInfo'
import Colors from '../shared/Colors'
import { formatTime } from '../services/formatTime'

export default function HospitalDetails() {
	const [hospital, setHospital] = useState()
	const param = useRoute().params
	const navigation = useNavigation()
	useEffect(() => {
		setHospital(param.hospital)
	})

	return (
		hospital && (
			<View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
				<ScrollView>
					<View
						style={{ position: 'absolute', zIndex: 10, margin: 15 }}
					>
						<PageHeader title={''} />
					</View>
					<View>
						<Image
							source={{
								uri:
									hospital.attributes.image.data?.attributes
										.url ||
									'https://res.cloudinary.com/ddxgsn30a/image/upload/v1705268791/thumbnail_switzerland_3_3440_1440_91787abfbf.jpg',
							}}
							style={{
								width: '100%',
								height: 260,
								opacity: 0.7,
							}}
						/>
						<View
							style={{
								marginTop: -20,
								backgroundColor: Colors.WHITE,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								padding: 20,
							}}
						>
							<HospitalInfo hospital={hospital} />
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity
					style={{
						padding: 13,
						backgroundColor: Colors.PRIMARY,
						margin: 10,
						borderRadius: 100,
						left: 0,
						right: 0,
						marginBottom: 10,
						zIndex: 20,
					}}
					onPress={() =>
						navigation.navigate('Book_Appointment', {
							hospital,
							startTime: formatTime(hospital.attributes.startTime)
								.time,
							endTime: formatTime(hospital.attributes.endTime)
								.time,
						})
					}
				>
					<Text
						style={{
							color: Colors.WHITE,
							textAlign: 'center',
							fontFamily: 'Roboto-Medium',
							fontSize: 17,
						}}
					>
						Book Appointment
					</Text>
				</TouchableOpacity>
			</View>
		)
	)
}
