import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import SearchBar from '../components/home/SearchBar'
import Slider from '../components/home/Slider'
import Categories from '../components/home/Categories'
import PremiumHospitals from '../components/home/PremiumHospitals'

import { LogBox } from 'react-native'

export default function Home() {
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
	}, [])
	return (
		<ScrollView style={{ padding: 20, marginTop: 20 }}>
			<Header />
			<Slider />
			<Categories />
			<PremiumHospitals />
		</ScrollView>
	)
}
