import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from '../../screens/Auth/login';
import RegisterScren from '../../screens/Auth/register';
// import ForgotPasswordScreen from '../../screens/Auth/ForgotPasswordScreen';


export default function AuthStack() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Sign In" component={LogInScreen} />
        <Stack.Screen name="Sign Up" component={RegisterScren} />
        {/* <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}