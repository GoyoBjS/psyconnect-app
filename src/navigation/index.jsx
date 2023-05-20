import React from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import ClientNavigation from './ClientNavigation'
import AuthStack from './AuthNavigation'
// import Loading from "../components/Loading";
import { SafeAreaView, Text, View } from 'react-native'

export default function RootNavigation() {
  const { user, loading } = useAuthentication()

  if (loading)
    return (
      <View>
        <Text>Loading.........</Text>
      </View>
    )
  return user ? (
    <ClientNavigation />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthStack />
    </SafeAreaView>
  )
}
