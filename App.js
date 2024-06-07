import { StyleSheet, SafeAreaView, View } from 'react-native'
import Login from './app/screens/Login'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from './app/navigations/TabNavigation'
import { useFonts } from 'expo-font'
import { ToastProvider } from 'react-native-toast-notifications'
import { ConfigProvider } from './app/shared/ConfigContext'

const tokenCache = {
	async getToken(key) {
		try {
			return SecureStore.getItemAsync(key)
		} catch (err) {
			return null
		}
	},
	async saveToken(key, value) {
		try {
			return SecureStore.setItemAsync(key, value)
		} catch (err) {
			return
		}
	},
}

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
		'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
		'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
	})

	if (!fontsLoaded) return null

	return (
		<ToastProvider>
			<ConfigProvider>
				<ClerkProvider
					tokenCache={tokenCache}
					publishableKey={process.env.EXPO_PUBLIC_CLERK_KEY}
				>
					<View style={styles.container}>
						<SignedIn>
							<NavigationContainer>
								<TabNavigation />
							</NavigationContainer>
						</SignedIn>
						<SignedOut>
							<Login />
						</SignedOut>
					</View>
				</ClerkProvider>
			</ConfigProvider>
		</ToastProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
