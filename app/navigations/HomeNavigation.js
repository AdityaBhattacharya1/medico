import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import HospitalDoctorsList from '../screens/HospitalDoctorsList'

const Stack = createStackNavigator()

export default function HomeNavigation() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen
				name="Hospital_Doctor_List_Screen"
				component={HospitalDoctorsList}
			/>
		</Stack.Navigator>
	)
}
