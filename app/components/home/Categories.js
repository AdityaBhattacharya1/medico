import {
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	LogBox,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import globalAPI from '../../services/globalAPI'
import Colors from '../../shared/Colors'
import SubHeading from './SubHeading'
import { useNavigation } from '@react-navigation/native'

export default function Categories() {
	const [categoryList, setCategoryList] = useState([])
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
	}, [])
	const navigation = useNavigation()
	const getCategories = () =>
		globalAPI
			.getCategories()
			.then((res) => setCategoryList(res.data.data))
			.catch((e) => {
				console.error(e.message)
				return e
			})
	useEffect(() => {
		getCategories()
	}, [])
	return (
		categoryList && (
			<View style={{ marginTop: 10 }}>
				<SubHeading
					subHeadingTitle={'Doctor Specialties'}
					seeAll={false}
				/>
				<FlatList
					data={categoryList}
					horizontal={true}
					renderItem={({ item, index }) => (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate(
									'Hospital_Doctor_List_Screen',
									{
										categoryName: item.attributes.Name,
									}
								)
							}
							style={{
								alignItems: 'center',
								marginBottom: 10,
								marginHorizontal: 5,
							}}
						>
							<View
								style={{
									backgroundColor: Colors.SECONDARY,
									padding: 15,
									borderRadius: 100,
								}}
							>
								<Image
									source={{
										uri: item.attributes.Icon.data
											.attributes.url,
									}}
									style={{ width: 30, height: 30 }}
								/>
							</View>
							<Text>{item.attributes.Name}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		)
	)
}
