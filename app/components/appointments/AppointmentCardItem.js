import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import HorizontalLine from '../../shared/HorizontalLine'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'

export default function AppointmentCardItem({ appointment }) {
	return (
		<View
			style={{
				padding: 10,
				borderWidth: 1,
				borderColor: Colors.LIGHT_GRAY,
				borderRadius: 10,
				marginTop: 15,
				backgroundColor: Colors.WHITE,
			}}
		>
			<Text style={{ fontSize: 16, fontFamily: 'Roboto-Medium' }}>
				{moment(appointment.attributes.Date).format('MMMM Do YYYY')} -{' '}
				{appointment.attributes.Time}
			</Text>
			<HorizontalLine />
			<View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
				<Image
					source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPvgAwqXfs8nIjQmXrSz9hDtYRyTG4TEmyMYUAqqj&s',
					}}
					style={{ height: 100, width: 90, borderRadius: 10 }}
				/>
				<View>
					<Text
						style={{
							fontSize: 14,
							fontFamily: 'Roboto-Medium',
							width: '80%',
						}}
					>
						{appointment.attributes.hospitals.data.attributes.Name}
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							alignItems: 'center',
							marginTop: 5,
						}}
					>
						<Ionicons
							name="location"
							size={18}
							color={Colors.PRIMARY}
						/>
						<Text
							style={{
								fontFamily: 'Roboto-Regular',
								color: Colors.GRAY,
								width: '75%',
							}}
						>
							{
								appointment.attributes.hospitals.data.attributes
									.Address
							}
						</Text>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: 5,
							alignItems: 'center',
							marginTop: 5,
						}}
					>
						<Ionicons
							name="document-text"
							size={18}
							color={Colors.PRIMARY}
						/>
						<Text
							style={{
								fontFamily: 'Roboto-Regular',
								color: Colors.GRAY,
							}}
						>
							Booking ID: {appointment.id}
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}
