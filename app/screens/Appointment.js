import {
	ScrollView,
	FlatList,
	RefreshControl,
	ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../shared/PageHeader'
import globalAPI from '../services/globalAPI'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../components/appointments/AppointmentCardItem'
import Colors from '../shared/Colors'

export default function Appointment() {
	const { user } = useUser()
	const [appointmentList, setAppointmentList] = useState([])
	const [refreshing, setRefreshing] = useState(true)

	const getUserAppointments = () => {
		globalAPI
			.getUserAppointments(user.primaryEmailAddress.emailAddress)
			.then((res) => {
				setRefreshing(false)
				setAppointmentList(res.data.data)
			})
	}
	useEffect(() => {
		user.firstName && getUserAppointments()
	}, [user])
	return (
		<ScrollView
			style={{ paddingHorizontal: 20, marginTop: 20, flex: 1 }}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={getUserAppointments}
				/>
			}
		>
			<PageHeader title={'My Appointments'} backButton={false} />
			{refreshing ? (
				<ActivityIndicator
					size={'small'}
					color={Colors.PRIMARY}
					style={{ marginTop: '30%' }}
				/>
			) : null}
			<FlatList
				data={appointmentList}
				renderItem={({ item, index }) => (
					<AppointmentCardItem appointment={item} />
				)}
			/>
		</ScrollView>
	)
}
