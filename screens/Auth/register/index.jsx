import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, {useState} from 'react'
import { createUser } from '../../../api/createUser'

const RegisterScreen = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleRegister = () => {
    createUser(user).then((res) => {
      console.log(res);
    })
  }

  return (
    <View>
      <Text>RegisterScreen</Text>
      <TextInput
        placeholder="Nombre"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />
      <TextInput
        placeholder="Email"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={user.email}
        keyboardType='email-address'
        onChangeText={(text) => setUser({ ...user, email: text })}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        keyboardType='default'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
      />

      <Button
        onPress={handleRegister}
        title="Registrarse"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})