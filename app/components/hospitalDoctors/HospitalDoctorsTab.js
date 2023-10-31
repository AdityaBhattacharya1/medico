import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../shared/Colors'

export default function HospitalDoctorsTab({ setActiveTab }) {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<View style={{ marginTop: 15 }}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
				}}
			>
				<TouchableOpacity
					onPress={() => {
						setActiveIndex(0)
						setActiveTab('Hospital')
					}}
					hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
					style={[
						activeIndex === 0
							? styles.activeTab
							: styles.inactiveTab,
					]}
				>
					<Text
						style={[
							activeIndex === 0
								? styles.activeText
								: styles.inactiveText,
						]}
					>
						Hospital
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setActiveIndex(1)
						setActiveTab('Doctor')
					}}
					hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
					style={[
						activeIndex === 1
							? styles.activeTab
							: styles.inactiveTab,
					]}
				>
					<Text
						style={[
							activeIndex === 1
								? styles.activeText
								: styles.inactiveText,
						]}
					>
						Doctors
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	activeText: {
		textAlign: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		color: Colors.PRIMARY,
	},
	inactiveText: {
		textAlign: 'center',
		fontFamily: 'Roboto-Regular',
		fontSize: 18,
		color: Colors.GRAY,
	},
	activeTab: {
		borderBottomWidth: 2,
		borderBottomColor: Colors.PRIMARY,
		borderRadius: 2,
		padding: 4,
		width: '25%',
	},
	inactiveTab: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.GRAY,
		borderRadius: 2,
		padding: 4,
		width: '25%',
	},
})
