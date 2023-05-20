import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../../screens/Client/ProfileTab'
// import Settings from "../../../screens/Client/ProfileTab/SettingsScreens/Settings";
// import EditProfile from "../../../screens/Client/ProfileTab/SettingsScreens/EditProfile";
// import ChangePassword from "../../../screens/Client/ProfileTab/SettingsScreens/ChangePassword";
// import EditPreferences from "../../../screens/Client/ProfileTab/SettingsScreens/EditPreferences"

const Stack = createNativeStackNavigator()

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          // headerShown: false,
          title: 'Tu perfil',
          headerShadowVisible: false,
          headerTintColor: '#473261',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
            marginHorizontal: 100
          }
        }}
        name="UserProfile"
        component={Profile}
      />
      {/* <Stack.Screen
        options={{
          title: "Configuración",
        }}
        name="Settings"
        component={Settings}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Editar Perfil" }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ title: "Cambiar Contraseña" }}
      />
      <Stack.Screen
        name="EditPreferences"
        component={EditPreferences}
        options={{ title: "Editar Preferencias" }}
      /> */}
      {/* 
       <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ title: "Contacto" }}
        />
      <Stack.Screen
        name="Inform"
        component={Inform}
        options={{ title: "Informar de un error" }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{ title: "Privacy" }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ title: "Terminos y condiciones" }}
      /> */}
    </Stack.Navigator>
  )
}

export default FeedStack
