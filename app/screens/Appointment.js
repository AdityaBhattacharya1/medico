import { ScrollView, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../shared/PageHeader'
import globalAPI from '../services/globalAPI'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../components/appointments/AppointmentCardItem'

export default function Appointment() {
	const { user } = useUser()
	const [appointmentList, setAppointmentList] = useState([])

	const getUserAppointments = () => {
		globalAPI
			.getUserAppointments(user.primaryEmailAddress.emailAddress)
			.then((res) => setAppointmentList(res.data.data))
	}
	useEffect(() => {
		user.firstName && getUserAppointments()
	}, [user])
	return (
		<ScrollView style={{ padding: 20 }}>
			<PageHeader title={'My Appointments'} backButton={false} />
			<FlatList
				data={appointmentList}
				renderItem={({ item, index }) => (
					<AppointmentCardItem appointment={item} />
				)}
			/>
		</ScrollView>
	)
}
