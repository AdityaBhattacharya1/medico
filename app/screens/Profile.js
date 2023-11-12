import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import Header from '../components/home/Header'
import SubHeading from '../components/home/SubHeading'
import Colors from '../shared/Colors'
import { useToast } from 'react-native-toast-notifications'
import HorizontalLine from '../shared/HorizontalLine'
import Modal from 'react-native-modal'

export default function Profile() {
	const { user } = useUser()
	const toast = useToast()
	const [firstName, setFirstName] = useState(user?.firstName)
	const [lastName, setLastName] = useState(user?.lastName)

	const onSaveUser = async () => {
		try {
			await user?.update({
				firstName: firstName,
				lastName: lastName,
			})
			toast.show('Details updated successfully!', {
				type: 'success',
				placement: 'bottom',
				duration: 2000,
			})
		} catch (error) {
			console.error({ error })
			toast.show('Error in updating details. Try again later', {
				type: 'danger',
				placement: 'bottom',
				duration: 2000,
			})
		}
	}
	return (
		<View style={{ padding: 20, marginVertical: 20 }}>
			<Header />
			<View style={{ marginTop: 10 }}>
				<SubHeading
					subHeadingTitle={'Change personal details'}
					seeAll={false}
				/>
				<TextInput
					placeholder="First Name"
					value={firstName || ''}
					onChangeText={(value) => setFirstName(value)}
					style={{
						marginVertical: 4,
						height: 50,
						borderWidth: 1,
						borderColor: Colors.PRIMARY,
						borderRadius: 4,
						padding: 10,
						backgroundColor: Colors.WHITE,
					}}
				/>
				<TextInput
					placeholder="Last Name"
					value={lastName || ''}
					onChangeText={(value) => setLastName(value)}
					style={{
						marginVertical: 4,
						height: 50,
						borderWidth: 1,
						borderColor: Colors.PRIMARY,
						borderRadius: 4,
						padding: 10,
						backgroundColor: Colors.WHITE,
					}}
				/>
				<TouchableOpacity
					onPress={onSaveUser}
					style={{
						backgroundColor: Colors.PRIMARY,
						padding: 10,
						borderRadius: 100,
						marginTop: 10,
					}}
				>
					<Text style={{ color: Colors.WHITE, textAlign: 'center' }}>
						Update Account
					</Text>
				</TouchableOpacity>
			</View>
			<HorizontalLine />
			<View>
				<SubHeading subHeadingTitle={'Sign out'} seeAll={false} />
				<SignOut />
			</View>
		</View>
	)
}

const SignOut = () => {
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
