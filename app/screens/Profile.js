import { View, TextInput, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Header from '../components/home/Header'
import SubHeading from '../components/home/SubHeading'
import Colors from '../shared/Colors'
import { useToast } from 'react-native-toast-notifications'
import HorizontalLine from '../shared/HorizontalLine'
import { SignOut } from '../components/profile/SignOut'

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
