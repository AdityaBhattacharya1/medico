import { Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HospitalDoctorsTab from '../components/hospitalDoctors/HospitalDoctorsTab'
import Colors from '../shared/Colors'
import globalAPI from '../services/globalAPI'
import HospitalList from '../components/hospitalDoctors/HospitalList'
import DoctorsList from '../components/hospitalDoctors/DoctorsList'
import SearchBar from '../components/home/SearchBar'

export default function Explore() {
	const [activeTab, setActiveTab] = useState('Hospital')
	const [hospitalListing, setHospitalListing] = useState()
	const [doctorsListing, setDoctorsListing] = useState()

	const [searchText, setSearchText] = useState('')

	const [isLoading, setIsLoading] = useState(false)

	const getHospitalsByCategory = () =>
		globalAPI
			.getAllHospitals(searchText)
			.then((res) => {
				setHospitalListing(res.data.data)
				setIsLoading(false)
			})
			.catch((e) => {
				console.error(e.message)
				return e
			})
	const getDoctorsByCategory = () =>
		globalAPI
			.getAllDoctors(searchText)
			.then((res) => {
				setDoctorsListing(res.data.data)
				setIsLoading(false)
			})
			.catch((e) => {
				console.error(e.message)
				return e
			})
	useEffect(() => {
		setIsLoading(true)
		getHospitalsByCategory()
		getDoctorsByCategory()
	}, [searchText])
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
			<SearchBar setSearchText={setSearchText} />
			<HospitalDoctorsTab setActiveTab={(value) => setActiveTab(value)} />
			{isLoading && (
				<ActivityIndicator
					size={'large'}
					color={Colors.PRIMARY}
					style={{ marginTop: '50%' }}
				/>
			)}
			{activeTab === 'Hospital' ? (
				<HospitalList hospitalList={hospitalListing} />
			) : (
				<DoctorsList doctorList={doctorsListing} />
			)}
		</ScrollView>
	)
}
