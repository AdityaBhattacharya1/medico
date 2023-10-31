import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import Colors from './Colors'

export default function HospitalCard({ hospital }) {
	return (
		<View
			style={{
				marginBottom: 20,
			}}
		>
			<Image
				source={{ uri: hospital.attributes.image.data.attributes.url }}
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
				<View
					style={{
						borderBottomWidth: 0.5,
						borderColor: Colors.LIGHT_GRAY,
						margin: 10,
						marginBottom: 10,
					}}
				/>
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
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
						marginTop: 5,
					}}
				>
					<Feather name="eye" size={18} color={Colors.PRIMARY} />
					<Text>658 Views</Text>
				</View>
			</View>
		</View>
	)
}
