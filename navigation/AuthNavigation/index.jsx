import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import('@react-navigation/native');

import AuthScreen from '../../screens/Auth';
import LogInScreen from '../../screens/Auth/login';
import RegisterScreen from '../../screens/Auth/register';
// import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';


export default function AuthStack() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen options={{ headerShown: false}} name="Home" component={AuthScreen} />*/}
        <Stack.Screen options={{ headerShown: false}} name="Sign In" component={LogInScreen} />
        <Stack.Screen name="Sign Up" component={RegisterScreen} />
        {/* <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}