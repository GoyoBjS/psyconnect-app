import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUser } from '../../../api/createUser'
import GlobalStyles from '../../../styles/GlobalStyles'

const RegisterScreen = () => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleRegister = () => {
    createUser(user, setError).then(() => {
      setTimeout(() => {
        setError('')
      }, 4000)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.registerInputs}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
        />
        <Text style={styles.label}>Apellidos</Text>
        <TextInput
          placeholder="Apellidos"
          style={styles.input}
          value={user.surname}
          onChangeText={(text) => setUser({ ...user, surname: text })}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={user.email}
          keyboardType="email-address"
          onChangeText={(text) => setUser({ ...user, email: text })}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          keyboardType="default"
          style={styles.input}
          value={user.password}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
        <Text style={styles.error}>{error}</Text>
      </View>

      <Pressable onPress={handleRegister} style={styles.registerButton}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // @ts-ignore
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingHorizontal: 16
  },
  title: {
    color: '#833AB4',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8
  },
  label: {
    color: '#A16AC7',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 16
  },
  registerInputs: {
    marginTop: 8,
    position: 'relative'
  },
  input: {
    paddingVertical: 19,
    paddingHorizontal: 12,
    color: '#473261',
    backgroundColor: '#A296B0',
    borderRadius: 10,
    textAlignVertical: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginVertical: 12
  },
  registerButton: {
    paddingVertical: 20,
    backgroundColor: '#F9B41F',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#F61C0D',
    position: 'absolute',
    bottom: -36,
    left: 4
  }
})
