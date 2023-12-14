import {
	ScrollView,
	FlatList,
	RefreshControl,
	ActivityIndicator,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../shared/PageHeader'
import globalAPI from '../services/globalAPI'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../components/appointments/AppointmentCardItem'
import Colors from '../shared/Colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Appointment() {
	const { user } = useUser()
	const [appointmentList, setAppointmentList] = useState([])
	const [refreshing, setRefreshing] = useState(true)
	const navigation = useNavigation()

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
			{appointmentList.length > 0 ? (
				<FlatList
					data={appointmentList}
					renderItem={({ item, index }) => (
						<AppointmentCardItem appointment={item} />
					)}
				/>
			) : (
				<View
					style={{
						marginTop: Dimensions.get('screen').height * 0.1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<AntDesign
						name="infocirlce"
						size={24}
						color={Colors.PRIMARY}
					/>
					<Text
						style={{
							fontSize: 20,
							marginTop: 10,
							color: Colors.PRIMARY,
						}}
					>
						No appointments found
					</Text>
					<TouchableOpacity
						style={{
							padding: 16,
							backgroundColor: Colors.PRIMARY,
							borderRadius: 90,
							alignItems: 'center',
							width: Dimensions.get('screen').width * 0.8,
							marginTop: 20,
						}}
						onPress={() => navigation.navigate('Home')}
					>
						<Text style={{ fontSize: 17, color: Colors.WHITE }}>
							Book An Appointment
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</ScrollView>
	)
}
