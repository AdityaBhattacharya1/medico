import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import ActionButton from './ActionButton'
import SubHeading from '../home/SubHeading'
import HorizontalLine from '../../shared/HorizontalLine'

export default function HospitalInfo({ hospital }) {
	return (
		hospital && (
			<View>
				<Text style={{ fontSize: 23, fontFamily: 'Roboto-Medium' }}>
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
						gap: 7,
						alignItems: 'center',
					}}
				>
					<Ionicons
						name="location"
						size={18}
						color={Colors.PRIMARY}
					/>
					<Text
						style={{
							fontSize: 16,
							fontFamily: 'Roboto-Regular',
							color: Colors.GRAY,
						}}
					>
						{hospital.attributes.Address}
					</Text>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 7,
						alignItems: 'center',
						marginTop: 6,
					}}
				>
					<AntDesign
						name="clockcircleo"
						size={18}
						color={Colors.PRIMARY}
					/>
					<Text
						style={{
							fontSize: 16,
							fontFamily: 'Roboto-Regular',
							color: Colors.GRAY,
						}}
					>
						Mon Sun | 11AM-8PM
					</Text>
				</View>
				<HorizontalLine />
				<ActionButton />
				<HorizontalLine />
				<SubHeading subHeadingTitle={'About'} seeAll={false} />
				<Text>{hospital.attributes.Description}</Text>
			</View>
		)
	)
}
