import { ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../shared/PageHeader.js'
import HospitalDoctorsTab from '../components/hospitalDoctors/HospitalDoctorsTab.js'
import HospitalList from '../components/hospitalDoctors/HospitalList.js'
import globalAPI from '../services/globalAPI.js'
import Colors from '../shared/Colors.js'
import DoctorsList from '../components/hospitalDoctors/DoctorsList.js'
import SearchBar from '../components/home/SearchBar.js'

export default function HospitalDoctorsList() {
	const param = useRoute().params
	const [hospitalListing, setHospitalListing] = useState()
	const [doctorsListing, setDoctorsListing] = useState()
	const [activeTab, setActiveTab] = useState('Hospital')
	const [searchText, setSearchText] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const getHospitalsByCategory = () =>
		globalAPI
			.getHospitalsByCategory(param?.categoryName, searchText)
			.then((res) => {
				setHospitalListing(res.data.data)
				setIsLoading(false)
			})
			.catch((e) => {
				console.error(e.response)
				return e
			})
	const getDoctorsByCategory = () =>
		globalAPI
			.getDoctorsByCategory(param?.categoryName, searchText)
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
		<ScrollView style={{ paddingHorizontal: 20, marginTop: 15 }}>
			<PageHeader title={param?.categoryName} />
			<SearchBar setSearchText={setSearchText} />
			<HospitalDoctorsTab setActiveTab={(value) => setActiveTab(value)} />
			{isLoading && (
				<ActivityIndicator
					size={'large'}
					color={Colors.PRIMARY}
					style={{ marginTop: '50%' }}
				/>
			)}
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
