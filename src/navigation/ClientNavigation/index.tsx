import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import History from "../../screens/client/historyTab";
// import Profile from "../../screens/client/profileTab";
// import Home from "../../screens/client/homeTab";
import ClientTabs from './ClientTabs'
import { NavigationContainer } from '@react-navigation/native'

const ClientNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tabs and Nested ScreenTabs */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={ClientTabs} />
        {/* Global accesible Screens */}
        {/* <Stack.Screen options={{ headerShown: false}} name="Product" component={Product} />
      <Stack.Screen name="MyProductList" component={MyProductList} />
      <Stack.Screen name="Chat" component={Chat} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ClientNavigation
