import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Appointment from '../screens/Appointment'
import Profile from '../screens/Profile'
import { AntDesign } from '@expo/vector-icons'
import HomeNavigation from './HomeNavigation'
import Explore from '../screens/Explore'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Home"
				component={HomeNavigation}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Explore"
				component={Explore}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="search1" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Appointment"
				component={Appointment}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="calendar" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="user" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
