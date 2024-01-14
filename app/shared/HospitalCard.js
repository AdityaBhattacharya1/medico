import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from './Colors'
import HorizontalLine from './HorizontalLine'

export default function HospitalCard({ hospital }) {
	console.log(hospital)
	return (
		<View
			style={{
				marginBottom: 20,
			}}
		>
			{hospital.attributes.Premium && <PremiumCard />}
			<Image
				source={{
					uri:
						hospital.attributes.image.data?.attributes.url ||
						'https://res.cloudinary.com/ddxgsn30a/image/upload/v1705268791/thumbnail_switzerland_3_3440_1440_91787abfbf.jpg',
				}}
				style={{
					width: '100%',
					height: 140,
					borderTopLeftRadius: 10,
					borderTopRightRadius: 10,
				}}
			/>
			<View
				style={{
					padding: 10,
					backgroundColor: Colors.WHITE,
					borderBottomLeftRadius: 10,
					borderBottomRightRadius: 10,
				}}
			>
				<Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
					{hospital.attributes.Name}
				</Text>
				<FlatList
					data={hospital.attributes.categories.data}
					horizontal={true}
					renderItem={({ item }) => (
						<Text style={{ marginRight: 5, color: Colors.GRAY }}>
							{item.attributes.Name}{' '}
							{hospital.attributes.categories.data.length > 1
								? '|'
								: ''}
						</Text>
					)}
				/>
				<HorizontalLine />
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
					}}
				>
					<Ionicons
						name="location"
						size={18}
						color={Colors.PRIMARY}
					/>
					<Text>{hospital.attributes.Address}</Text>
				</View>
			</View>
		</View>
	)
}

function PremiumCard() {
	return (
		<View
			style={{
				marginTop: 10,
				marginBottom: 10,
				marginLeft: 10,
				padding: 5,
				width: '30%',
				backgroundColor: Colors.SECONDARY,
				borderRadius: 10,
				display: 'flex',
				flexDirection: 'row',
				gap: 7,
				alignItems: 'center',
				position: 'absolute',
				zIndex: 10,
			}}
		>
			<Ionicons
				name="ios-shield-checkmark"
				size={15}
				color={Colors.PRIMARY}
			/>
			<Text
				style={{
					color: Colors.PRIMARY,
					fontFamily: 'Roboto-Regular',
					fontSize: 15,
				}}
			>
				Premium
			</Text>
		</View>
	)
}
