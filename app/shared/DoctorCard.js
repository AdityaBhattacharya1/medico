import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from './Colors'
import HorizontalLine from './HorizontalLine'
import { useNavigation } from '@react-navigation/native'

export default function DoctorCard({ doctors }) {
	const navigation = useNavigation()
	console.log(doctors.attributes.hospital.data)

	return (
		<View
			style={{
				marginBottom: 20,
			}}
		>
			<View
				style={{
					padding: 10,
					backgroundColor: Colors.WHITE,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
				}}
			>
				{doctors.attributes.YearsOfExperience > 10 && (
					<ProfessionalCard />
				)}
				<Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
					{doctors.attributes.Name}
				</Text>
				<FlatList
					data={doctors.attributes.categories.data}
					horizontal={true}
					renderItem={({ item }) => (
						<Text style={{ marginRight: 5, color: Colors.GRAY }}>
							{item.attributes.Name}{' '}
							{doctors.attributes.categories.data.length > 1
								? '|'
								: ''}
						</Text>
					)}
				/>
				<HorizontalLine />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
					}}
				>
					<Ionicons
						name="location"
						size={18}
						color={Colors.PRIMARY}
					/>
					<Text>{doctors.attributes.Address}</Text>
				</View>
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
						{doctors.attributes.Patients} patients
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
