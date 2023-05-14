import {Pressable, StyleSheet, Text, Touchable, View} from 'react-native'
import React, {useCallback} from 'react'
import { getAuth, signOut } from "firebase/auth";
import * as SecureStore from "expo-secure-store";

const ProfileScreen = ({navigation}) => {
  const auth = getAuth();

  const handleSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        SecureStore.deleteItemAsync("user");
        SecureStore.deleteItemAsync("token");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>ProfileScreen</Text>
        <Pressable onPress={handleSignOut}>
            <Text>Logout</Text>
        </Pressable>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})