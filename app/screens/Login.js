import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'
import SignInWithOAuth from '../components/SignInWithOAuth'

export default function Login() {
	return (
		<View
			style={{
				backgroundColor: Colors.WHITE,
				padding: 25,
				alignItems: 'center',
				marginTop: 30,
			}}
		>
			<Image
				source={require('../../assets/hero-img.jpeg')}
				style={{ height: 400, width: 400 }}
			/>
			<Text style={styles.heading}>Your Ultimate Doctor</Text>
			<Text style={styles.heading}>Appointment Booking App</Text>
			<Text style={{ textAlign: 'center', marginTop: 20 }}>
				Book appointments effortlessly and manage your health journey
			</Text>

			<SignInWithOAuth />
		</View>
	)
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 25,
		fontWeight: 'bold',
		fontFamily: 'Roboto-Medium',
	},
})
