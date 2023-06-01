import React from 'react'
import './src/config/firebase'
import RootNavigation from './src/navigation'
import { SafeAreaView, StatusBar } from 'react-native'
// import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ThemeProvider> */}
      <StatusBar
        animated={true}
        backgroundColor={'#F5F5F5'}
        barStyle="dark-content"
        hidden={false}
      />
      <RootNavigation />
      {/* </ThemeProvider> */}
    </SafeAreaView>
  )
}
