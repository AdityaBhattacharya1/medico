import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Colors from '../../shared/Colors'
import Modal from 'react-native-modal'

export const SignOut = () => {
	const { isLoaded, signOut } = useAuth()
	const [isModalVisible, setModalVisible] = useState(false)

	if (!isLoaded) {
		return null
	}
	const toggleModal = () => {
		setModalVisible(!isModalVisible)
	}
	return (
		<View>
			<TouchableOpacity
				onPress={toggleModal}
				style={{
					backgroundColor: Colors.PRIMARY,
					padding: 10,
					borderRadius: 100,
					marginTop: 10,
				}}
			>
				<Text style={{ color: Colors.WHITE, textAlign: 'center' }}>
					Sign Out
				</Text>
			</TouchableOpacity>
			<Modal
				isVisible={isModalVisible}
				onBackButtonPress={toggleModal}
				animationIn={'fadeInUp'}
				animationOut={'fadeOutDown'}
			>
				<View
					style={{
						padding: 20,
						backgroundColor: Colors.WHITE,
						borderRadius: 25,
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							color: Colors.PRIMARY,
							fontSize: 16,
							fontFamily: 'Roboto-Medium',
							marginVertical: 15,
						}}
					>
						Are you sure you want to sign out?
					</Text>
					<TouchableOpacity
						onPress={() => signOut()}
						style={{
							backgroundColor: Colors.PRIMARY,
							padding: 10,
							borderRadius: 100,
							marginVertical: 10,
						}}
					>
						<Text
							style={{ color: Colors.WHITE, textAlign: 'center' }}
						>
							Sign Out
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={toggleModal}
						style={{
							padding: 10,
							borderRadius: 100,
							marginVertical: 5,
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 16,
								fontFamily: 'Roboto-Medium',
							}}
						>
							Cancel
						</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</View>
	)
}
