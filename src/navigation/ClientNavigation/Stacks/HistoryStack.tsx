import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HistoryScreen from '../../../screens/Client/HistoryTab'
import EditRegisterScreen from '../../../screens/Client/HistoryTab/EditRegisterScreen'

const Stack = createNativeStackNavigator()

const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        name="Historial"
        component={HistoryScreen}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
        name="EditRegisterScreen"
        component={EditRegisterScreen}
      />
    </Stack.Navigator>
  )
}

export default HistoryStack
