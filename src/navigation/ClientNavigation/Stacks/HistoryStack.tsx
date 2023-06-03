import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HistoryScreen from '../../../screens/Client/HistoryTab'
import EditRegisterScreen from '../../../screens/Client/HistoryTab/EditRegisterScreen'

const Stack = createNativeStackNavigator()

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Historial"
        component={HistoryScreen}
      />

      <Stack.Screen
        options={{
          title: 'Editar registro'
        }}
        name="EditRegisterScreen"
        component={EditRegisterScreen}
      />
    </Stack.Navigator>
  )
}

export default HistoryStack
