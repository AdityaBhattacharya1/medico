import { ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppointmentHospitalInfo from '../components/bookAppointment/AppointmentHospitalInfo'
import ActionButton from '../components/hospitalDoctors/ActionButton'
import HorizontalLine from '../shared/HorizontalLine'
import BookAppointmentSection from '../components/bookAppointment/BookAppointmentSection'

export default function BookAppointment() {
	const params = useRoute().params
	return (
		<ScrollView style={{ padding: 20, flex: 1 }}>
			<AppointmentHospitalInfo hospital={params.hospital} />
			<ActionButton />
			<HorizontalLine />
			<BookAppointmentSection hospital={params.hospital} />
		</ScrollView>
	)
}
