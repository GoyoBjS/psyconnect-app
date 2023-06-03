import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../../screens/Client/ProfileTab'
import EditProfile from '../../../screens/Client/ProfileTab/Screens/EditProfile'
import Contact from '../../../screens/Client/ProfileTab/Screens/Contact'
import Privacy from '../../../screens/Client/ProfileTab/Screens/Privacy'
import TermsAndConditions from '../../../screens/Client/ProfileTab/Screens/TermsConditions'

const Stack = createNativeStackNavigator()

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Tu perfil'
        }}
        name="UserProfile"
        component={Profile}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Editar Perfil' }}
      />
      <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contacto' }} />
      <Stack.Screen name="Privacy" component={Privacy} options={{ title: 'Privacy' }} />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ title: 'Terminos y condiciones' }}
      />
    </Stack.Navigator>
  )
}

export default FeedStack
