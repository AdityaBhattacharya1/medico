import { Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HospitalDoctorsTab from '../components/hospitalDoctors/HospitalDoctorsTab'
import Colors from '../shared/Colors'
import globalAPI from '../services/globalAPI'
import HospitalList from '../components/hospitalDoctors/HospitalList'
import DoctorsList from '../components/hospitalDoctors/DoctorsList'

export default function Explore() {
	const [activeTab, setActiveTab] = useState('Hospital')
	const [hospitalListing, setHospitalListing] = useState()
	const [doctorsListing, setDoctorsListing] = useState()
	const getHospitalsByCategory = () =>
		globalAPI
			.getAllHospitals()
			.then((res) => setHospitalListing(res.data.data))
			.catch((e) => {
				console.error(e.message)
				return e
			})
	const getDoctorsByCategory = () =>
		globalAPI
			.getAllDoctors()
			.then((res) => setDoctorsListing(res.data.data))
			.catch((e) => {
				console.error(e.message)
				return e
			})
	useEffect(() => {
		getHospitalsByCategory()
		getDoctorsByCategory()
	}, [])
	return (
		<ScrollView style={{ padding: 25 }}>
			<Text
				style={{
					fontSize: 26,
					fontFamily: 'Roboto-Medium',
					marginTop: 25,
				}}
			>
				Explore
			</Text>
			<HospitalDoctorsTab setActiveTab={(value) => setActiveTab(value)} />
			{!hospitalListing?.length ? (
				<ActivityIndicator
					size={'large'}
					color={Colors.PRIMARY}
					style={{ marginTop: '50%' }}
				/>
			) : activeTab == 'Hospital' ? (
				<HospitalList hospitalList={hospitalListing} />
			) : (
				<DoctorsList doctorList={doctorsListing} />
			)}
		</ScrollView>
	)
}
