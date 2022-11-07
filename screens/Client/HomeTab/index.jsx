import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flex: 1}}>
      <Text>HomeScreen</Text>
      <Button title="Go to AdvanceRegister" onPress={() => navigation.navigate('AdvancedRegistration')} />
      <Button title="Go to QuickRegister" onPress={() => navigation.navigate('QuickRegistration')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})