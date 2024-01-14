import { View, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import globalAPI from '../../services/globalAPI'

export default function Slider() {
	const [sliderList, setSliderList] = useState()

	const getSlider = () => {
		globalAPI
			.getSlider()
			.then((res) => setSliderList(res.data.data))
			.catch((e) => {
				console.error(e.response)
				return e
			})
	}

	useEffect(() => {
		getSlider()
	}, [])
	return (
		<View style={{ marginTop: 10 }}>
			<FlatList
				data={sliderList}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<Image
						source={{
							uri: item.attributes.Image.data.attributes.url,
						}}
						style={{
							width: Dimensions.get('screen').width * 0.9,
							height: 170,
							borderRadius: 10,
							margin: 2,
						}}
					/>
				)}
			/>
		</View>
	)
}
