import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInScreen from '../../screens/Auth/login'
import RegisterScreen from '../../screens/Auth/register'

import('@react-navigation/native')

export default function AuthStack() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LogInScreen} />
        <Stack.Screen name="Sign Up" options={{ headerShown: false }} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
