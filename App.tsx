import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, View } from 'react-native'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import GeneralSans400 from './src/assets/fonts/GeneralSans-Regular.otf'
import GeneralSans600 from './src/assets/fonts/GeneralSans-Semibold.otf'
import GeneralSans700 from './src/assets/fonts/GeneralSans-Bold.otf'

import { Main } from './src/screens/Main'

export default function App () {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': GeneralSans400,
    'GeneralSans-600': GeneralSans600,
    'GeneralSans-700': GeneralSans700
  })

  if (!fontsLoaded) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ActivityIndicator size="large" color="#D73035" />
      </View>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
  )
}
