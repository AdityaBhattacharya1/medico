import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../shared/Colors'
import SubHeading from '../home/SubHeading'
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo'
import globalAPI from '../../services/globalAPI'
import { useToast } from 'react-native-toast-notifications'
import { useNavigation } from '@react-navigation/native'

export default function BookAppointmentSection({
	hospital,
	startTime = 11,
	endTime = 23,
}) {
	const { user } = useUser()
	const toast = useToast()
	const navigation = useNavigation()

	const [nextSevenDays, setNextSevenDays] = useState([])
	const [timingsList, setTimingsList] = useState([])

	const [selectedDate, setSelectedDate] = useState()
	const [selectedTime, setSelectedTime] = useState()

	const [note, setNote] = useState('')

	const getDays = () => {
		const nextDays = []
		for (let i = 1; i < 8; i++) {
			let date = moment().add(i, 'days')
			nextDays.push({
				date: date,
				day: date.format('ddd'),
				formattedDate: date.format('Do MMM'),
			})
		}
		setNextSevenDays(nextDays)
	}

	const getTime = () => {
		const timeList = []

		// create startTime and endTime intervals
		const start = new Date()
		start.setHours(startTime.hoursOfTime, startTime.minutesOfTime, 0)
		const end = new Date()
		end.setHours(endTime.hoursOfTime, endTime.minutesOfTime, 0)
		let resTime

		// generate times between start and end with 30 mins interval
		while (start <= end) {
			resTime = start.toLocaleString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
			})
			timeList.push({ time: resTime })
			start.setMinutes(start.getMinutes() + 30)
		}
		setTimingsList(timeList)
	}

	const bookAppointment = () => {
		const data = {
			data: {
				userName: user.fullName,
				Email: user.primaryEmailAddress.emailAddress,
				Date: selectedDate,
				Time: selectedTime,
				hospitals: hospital.id,
				Note: note,
				DateTimeUID:
					moment(selectedDate).format('MMMMDoYYYY') + selectedTime,
			},
		}
		globalAPI
			.createAppointment(data)
			.then((res) => {
				toast.show('Appointment booked successfully!', {
					type: 'success',
					placement: 'bottom',
					duration: 2000,
				})
				setTimeout(() => navigation.goBack(), 2000)
			})
			.catch((e) => {
				toast.show('Appointment already exists!', {
					type: 'danger',
					placement: 'bottom',
					duration: 2000,
				})
				setTimeout(() => navigation.goBack(), 2000)
			})
	}

	useEffect(() => {
		getDays()
		getTime()
	}, [])

	return (
		<View>
			<Text
				style={{
					fontSize: 18,
					color: Colors.GRAY,
					fontFamily: 'Roboto-Regular',
				}}
			>
				Book Appointment
			</Text>
			<SubHeading subHeadingTitle={'Day'} seeAll={false} />
			<FlatList
				data={nextSevenDays}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={[
							styles.dayButton,
							selectedDate == item.date
								? { backgroundColor: Colors.PRIMARY }
								: null,
						]}
						onPress={() => setSelectedDate(item.date)}
					>
						<Text
							style={[
								{ fontFamily: 'Roboto-Regular' },
								selectedDate == item.date
									? { color: Colors.WHITE }
									: null,
							]}
						>
							{item.day}
						</Text>
						<Text
							style={[
								{
									fontFamily: 'Roboto-Medium',
									fontSize: 16,
								},
								selectedDate == item.date
									? { color: Colors.WHITE }
									: null,
							]}
						>
							{item.formattedDate}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<SubHeading subHeadingTitle={'Time'} seeAll={false} />
			<FlatList
				data={timingsList}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={[
							styles.dayButton,
							{ paddingVertical: 16 },
							selectedTime == item.time
								? { backgroundColor: Colors.PRIMARY }
								: null,
						]}
						onPress={() => setSelectedTime(item.time)}
					>
						<Text
							style={[
								{ fontFamily: 'Roboto-Regular' },
								selectedTime == item.time
									? { color: Colors.WHITE }
									: null,
							]}
						>
							{item.time}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<SubHeading subHeadingTitle={'Note'} seeAll={false} />
			<TextInput
				numberOfLines={3}
				style={{
					backgroundColor: Colors.LIGHT_GRAY,
					padding: 10,
					borderRadius: 10,
					borderColor: Colors.SECONDARY,
					borderWidth: 1,
					textAlignVertical: 'top',
				}}
				placeholder="Your notes here."
				value={note}
				onChangeText={(value) => setNote(value)}
			/>
			<TouchableOpacity
				style={{
					padding: 13,
					backgroundColor: Colors.PRIMARY,
					margin: 10,
					borderRadius: 100,
					left: 0,
					right: 0,
					marginBottom: 10,
					zIndex: 20,
				}}
				onPress={() => bookAppointment()}
			>
				<Text
					style={{
						color: Colors.WHITE,
						textAlign: 'center',
						fontFamily: 'Roboto-Medium',
						fontSize: 17,
					}}
				>
					Make Appointment
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	dayButton: {
		borderWidth: 1,
		borderRadius: 99,
		padding: 5,
		paddingHorizontal: 20,
		alignItems: 'center',
		marginRight: 10,
		borderColor: Colors.GRAY,
	},
})
