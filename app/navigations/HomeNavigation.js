import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import HospitalDoctorsList from '../screens/HospitalDoctorsList'
import HospitalDetails from '../screens/HospitalDetails'
import BookAppointment from '../screens/BookAppointment'

const Stack = createStackNavigator()

export default function HomeNavigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen
				name="Hospital_Doctor_List_Screen"
				component={HospitalDoctorsList}
			/>
			<Stack.Screen name="Hospital_Detail" component={HospitalDetails} />
			<Stack.Screen name="Book_Appointment" component={BookAppointment} />
		</Stack.Navigator>
	)
}
