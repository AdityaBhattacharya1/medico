import { View, Button, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import Slider from '../components/home/Slider'
import Categories from '../components/home/Categories'
import PremiumHospitals from '../components/home/PremiumHospitals'

import { LogBox } from 'react-native'

export default function Home() {
	const [searchText, setSearchText] = useState('')
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
	}, [])
	return (
		<ScrollView style={{ padding: 20, marginTop: 20 }}>
			<Header />
			<SearchBar setSearchText={setSearchText} />
			<Slider />
			<Categories />
			<PremiumHospitals />
		</ScrollView>
	)
}
