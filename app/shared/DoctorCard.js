import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons'
import Colors from './Colors'
import HorizontalLine from './HorizontalLine'
import { useNavigation } from '@react-navigation/native'

const formatTime = (time) => {
	let hoursOfTime = time && time.slice(0, 2)
	hoursOfTime = parseInt(hoursOfTime)
	let res = `${time} ${hoursOfTime >= 12 ? 'PM' : 'AM'}`
	return res
}

export default function DoctorCard({ doctors }) {
	const navigation = useNavigation()
	let startTime = doctors.attributes.StartTime
	let endTime = doctors.attributes.EndTime

	// date format received: hours:minutes:seconds.milliseconds. we trim of the seconds and milliseconds.
	startTime = startTime && startTime.substring(0, startTime.length - 7)
	endTime = endTime && endTime.substring(0, endTime.length - 7)

	return (
		<View
			style={{
				marginBottom: 10,
			}}
		>
			<View
				style={{
					padding: 10,
					backgroundColor: Colors.WHITE,
					borderRadius: 10,
				}}
			>
				{doctors.attributes.YearsOfExperience > 10 && (
					<ProfessionalCard />
				)}
				<View
					style={{
						display: 'flex',
						alignItems: 'center',
						flexDirection: 'row',
					}}
				>
					{doctors.attributes.profileImage.data && (
						<Image
							source={{
								uri: doctors.attributes.profileImage.data
									.attributes.url,
							}}
							style={{ height: 100, width: 90, borderRadius: 10 }}
						/>
					)}
					<View>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'Roboto-Medium',
							}}
						>
							{doctors.attributes.Name}
						</Text>
						<FlatList
							data={doctors.attributes.categories.data}
							horizontal={true}
							renderItem={({ item, index }) => (
								<Text
									style={{
										marginRight: 5,
										color: Colors.GRAY,
									}}
								>
									{item.attributes.Name}{' '}
									{doctors.attributes.categories.data.length >
									1
										? '|'
										: ''}
								</Text>
							)}
						/>
					</View>
				</View>

				<HorizontalLine />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
						marginBottom: 5,
					}}
				>
					<AntDesign
						name="clockcircleo"
						size={16}
						color={Colors.PRIMARY}
					/>
					<Text>
						Timings: {formatTime(startTime)} - {formatTime(endTime)}
					</Text>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
					}}
				>
					<Entypo name="location" size={18} color={Colors.PRIMARY} />
					<Text>{doctors.attributes.Address}</Text>
				</View>
				<HorizontalLine />
				<Text
					style={{
						fontFamily: 'Roboto-Regular',
						fontSize: 16,
						color: Colors.GRAY,
					}}
				>
					About The Doctor
				</Text>
				<View
					style={{
						marginTop: 5,
					}}
				>
					<Text style={{ color: Colors.PRIMARY }}>
						{doctors.attributes.YearsOfExperience}+ years of
						experience
					</Text>
					<Text style={{ color: Colors.PRIMARY }}>
						{doctors.attributes.Patients}+ patients
					</Text>
				</View>
				<TouchableOpacity
					style={{
						marginTop: 10,
						padding: 10,
						backgroundColor: Colors.SECONDARY,
						borderRadius: 10,
					}}
					onPress={() =>
						navigation.navigate('Book_Appointment', {
							hospital: doctors.attributes.hospital.data,
						})
					}
				>
					<Text
						style={{
							color: Colors.PRIMARY,
							textAlign: 'center',
							fontFamily: 'Roboto-Regular',
						}}
					>
						Make an appointment
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

function ProfessionalCard() {
	return (
		<View
			style={{
				marginTop: 10,
				marginBottom: 10,
				padding: 5,
				width: '57%',
				backgroundColor: Colors.SECONDARY,
				borderRadius: 10,
				display: 'flex',
				flexDirection: 'row',
				gap: 7,
				alignItems: 'center',
			}}
		>
			<Ionicons
				name="ios-shield-checkmark"
				size={15}
				color={Colors.PRIMARY}
			/>
			<Text
				style={{
					color: Colors.PRIMARY,
					fontFamily: 'Roboto-Regular',
					fontSize: 15,
				}}
			>
				Professional Doctor
			</Text>
		</View>
	)
}
