import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../../shared/Colors'

export default function SearchBar({ setSearchText }) {
	const [searchInput, setSearchInput] = useState('')
	return (
		<View style={{ marginTop: 15 }}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: 5,
					alignItems: 'center',
					borderWidth: 0.7,
					borderColor: Colors.LIGHT_GRAY,
					padding: 8,
					borderRadius: 8,
				}}
			>
				<AntDesign name="search1" size={24} color={Colors.primary} />
				<TextInput
					placeholder="Search"
					onChangeText={(value) => setSearchInput(value)}
					value={searchInput}
					onSubmitEditing={() => setSearchText(searchInput)}
					style={{ width: '100%', fontFamily: 'Roboto-Regular' }}
				/>
			</View>
		</View>
	)
}
