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
				<SubHeading subHeadingTitle={'Doctor Specialties'} />
				<FlatList
					data={categoryList}
					numColumns={4}
					columnWrapperStyle={{
						flex: 1,
						justifyContent: 'space-between',
					}}
					renderItem={({ item, index }) =>
						index < 4 && (
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
						)
					}
				/>
			</View>
		)
	)
}
