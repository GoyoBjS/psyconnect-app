import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientTabs from './ClientTabs'
import { NavigationContainer } from '@react-navigation/native'

const ClientNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={ClientTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ClientNavigation
