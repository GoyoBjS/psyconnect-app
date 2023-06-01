import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileStack from './Stacks/ProfileStack'
import HomeStack from './Stacks/HomeStack'
import HistoryStack from './Stacks/HistoryStack'
import { Platform, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const RootTabScreens = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      initialRouteName={'Feed'}
      // @ts-ignore
      screenOptions={styles.container}
    >
      <Tab.Screen
        name="Calendario"
        component={HistoryStack}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <AntDesign name="calendar" size={size} color={focused ? '#7D26E9' : '#000'} />
          }
        }}
      />
      <Tab.Screen
        name="Registrar"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <AntDesign name="pluscircleo" size={size} color={focused ? '#7D26E9' : '#000'} />
          }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return <AntDesign name="user" size={size} color={focused ? '#7D26E9' : '#000'} />
          },
          title: 'Perfil'
        }}
      />
    </Tab.Navigator>
  )
}

export default RootTabScreens

const styles = StyleSheet.create({
  container: {
    // @ts-ignore
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: '#7D26E9',
    tabBarStyle: {
      height: Platform.OS === 'ios' ? 55 : 70,
      paddingHorizontal: 5,
      paddingTop: 0,
      paddingBottom: Platform.OS === 'ios' ? 0 : 10,
      backgroundColor: '#fff',
      borderTopWidth: 0
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    }
  }
})
