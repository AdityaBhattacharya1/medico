import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useUser, useAuth } from '@clerk/clerk-react'
import PageHeader from '../shared/PageHeader'
import axios from 'axios'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { scale } from '../../utils/dataMapper'
import Colors from '../shared/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { useConfig } from '../shared/ConfigContext'

const Heartbeat = () => {
	const { user, isLoaded } = useUser()
	const { getToken } = useAuth()
	const config = useConfig()
	console.log('cfg', config)

	const [sessionToken, setSessionToken] = useState('')
	const [data, setData] = useState('')
	const [dataArr, setDataArr] = useState([])
	const navigation = useNavigation()

	const HEARTBEAT_API_URL = config.heartBeatAPIUrl
	const TOKEN_API_URL = config.tokenAPIUrl

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = await getToken()
				setSessionToken(token)
				sendTokenToPython(token, user.id)
				setInterval(() => fetchBPMData(user.id), 1000)
			} catch (err) {
				console.log('error sending token', JSON.stringify(err))
			}
		}

		fetchData()
	}, [user.id, isLoaded])

	const sendTokenToPython = async (token, userId) => {
		try {
			await fetch(`${TOKEN_API_URL}/set_token`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
					mode: 'cors',
				},
				body: JSON.stringify({ token: token, userId: userId }),
			})
			console.log('Data sent to Python script')
		} catch (error) {
			console.error('Error sending token:', error)
		}
	}

	const fetchBPMData = async (userId) => {
		try {
			const response = await axios.get(
				`${HEARTBEAT_API_URL}/user/data/${userId}`,
				{
					headers: {
						Authorization: `Bearer ${sessionToken}`,
					},
				}
			)
			console.log('res', response.data)
			setDataArr(response.data)
			setData(response.data[0].value)
		} catch (error) {
			console.error('Error fetching data:', JSON.stringify(error))
		}
	}
	console.log('data', dataArr)
	return (
		<View style={{ paddingHorizontal: 20, marginTop: 30, flex: 1 }}>
			<PageHeader title={'Measure Heartbeat'} backButton={false} />
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 20,
				}}
			>
				<Text style={{ marginBottom: 20, fontSize: 20 }}>
					BPM: {data}
				</Text>
				<AnimatedCircularProgress
					size={120}
					width={15}
					backgroundWidth={5}
					fill={scale(data, 30, 200, 0, 100)}
					tintColor="#00ff00"
					tintColorSecondary="#ff0000"
					backgroundColor="#3d5875"
					arcSweepAngle={240}
					rotation={240}
					lineCap="round"
				>
					{() => <Text>{data}</Text>}
				</AnimatedCircularProgress>
			</View>
			{data > 120 || data < 60 ? (
				<View
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}
				>
					<AntDesign
						name="warning"
						size={32}
						color="red"
						style={{ paddingBottom: 15 }}
					/>
					<Text style={{ fontSize: 15 }}>
						You have an unusually high or low blood pressure. Unless
						this is due to any other pre-existing medical condition,
						we advise medical professional attention
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
			) : (
				<View
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}
				>
					<AntDesign
						name="checkcircle"
						size={32}
						color={Colors.PRIMARY}
						style={{ paddingBottom: 15 }}
					/>
					<Text style={{ fontSize: 15 }}>Normal blood pressure</Text>
				</View>
			)}
		</View>
	)
}

export default Heartbeat
