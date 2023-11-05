import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../../shared/PageHeader'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import HorizontalLine from '../../shared/HorizontalLine'

export default function AppointmentHospitalInfo({ hospital }) {
	return (
		<View>
			<PageHeader title={'Book Appointment'} />
			<View
				style={{
					marginTop: 10,
					display: 'flex',
					flexDirection: 'row',
					gap: 15,
					alignItems: 'center',
				}}
			>
				<Image
					source={{
						uri: hospital.attributes.image.data.attributes.url,
					}}
					style={{ width: 100, height: 100, borderRadius: 100 }}
				/>
				<View>
					<Text
						style={{
							fontSize: 20,
							fontFamily: 'Roboto-Regular',
							marginBottom: 8,
							width: '70%',
						}}
					>
						{hospital.attributes.Name}
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: 7,
							alignItems: 'center',
						}}
					>
						<Ionicons
							name="location"
							size={18}
							color={Colors.PRIMARY}
						/>
						<Text
							style={{
								fontSize: 13,
								fontFamily: 'Roboto-Regular',
								color: Colors.GRAY,
								width: '70%',
							}}
						>
							{hospital.attributes.Address}
						</Text>
					</View>
				</View>
			</View>
			<HorizontalLine />
		</View>
	)
}
