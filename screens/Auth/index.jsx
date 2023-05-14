import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import * as SecureStore from "expo-secure-store";

const AuthScreen = ({navigation}) => {

    const getUser = async () => {
        const user = await SecureStore.getItemAsync('user');
        console.log(user);
    }

  return (
    <View>
      <Text>index</Text>
      <Button title="SignupDataType" onPress={() => navigation.navigate('Sign Up')} />
        <Button title="Login" onPress={() => navigation.navigate('Sign In')} />
    </View>
  )
}

export default AuthScreen;

const styles = StyleSheet.create({})