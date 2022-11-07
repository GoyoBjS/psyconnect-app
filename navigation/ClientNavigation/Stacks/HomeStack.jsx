import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../../screens/Client/HomeTab";
import AdvancedRegistrationScreen from "../../../screens/Client/HomeTab/Registrations/AdvancedRegistration";
import QuickRegistrationScreen from "../../../screens/Client/HomeTab/Registrations/QuickRegistration";
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "Registro Rápido",
        }}
        name="QuickRegistration"
        component={QuickRegistrationScreen}
      />
      <Stack.Screen
        options={{
          title: "Registro Avanzado",
        }}
        name="AdvancedRegistration"
        component={AdvancedRegistrationScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
