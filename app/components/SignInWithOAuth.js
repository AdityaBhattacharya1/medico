import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Dimensions, TouchableOpacity, Text } from 'react-native'
import { useOAuth } from '@clerk/clerk-expo'
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser'
import Colors from '../shared/Colors'

WebBrowser.maybeCompleteAuthSession()

const SignInWithOAuth = () => {
	// Warm up the android browser to improve UX
	// https://docs.expo.dev/guides/authentication/#improving-user-experience
	useWarmUpBrowser()

	const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

	const onPress = React.useCallback(async () => {
		try {
			const { createdSessionId, signIn, signUp, setActive } =
				await startOAuthFlow()

			if (createdSessionId) {
				setActive({ session: createdSessionId })
			} else {
				// Use signIn or signUp for next steps such as MFA
			}
		} catch (err) {
			console.error('OAuth error', err)
		}
	}, [])

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				padding: 16,
				backgroundColor: Colors.PRIMARY,
				borderRadius: 90,
				alignItems: 'center',
				marginTop: Dimensions.get('screen').height * 0.1,
				width: Dimensions.get('screen').width * 0.8,
			}}
		>
			<Text style={{ fontSize: 17, color: Colors.WHITE }}>
				Login using Google
			</Text>
		</TouchableOpacity>
	)
}
export default SignInWithOAuth
