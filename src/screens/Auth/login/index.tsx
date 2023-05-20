import React, { useState } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import GlobalStyles from '../../../styles/GlobalStyles'
// import debounce from "lodash.debounce";
import { signup } from '../../../api/signup'
import { SignupDataType } from '../../../types/signupData.type'

const SignInScreen = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState<SignupDataType>({
    email: '',
    password: '',
    error: ''
  })
  // const debouncedSubmit = debounce(async (value) => signUp(value), 300)
  const onSubmit = () => {
    signup(value).then((res: string | undefined) => {
      if (res) {
        console.log(res)
        setValue({ ...value, error: res })
      }
    })
    console.log(value)
  }
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.subtitle}>Nos alegramos de verte</Text>
          <Text style={styles.title}>Por favor, Inicia sesion</Text>
        </View>

        <View style={styles.registerInputs}>
          <TextInput
            style={styles.input}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            placeholderTextColor="#473261"
            underlineColorAndroid="transparent"
            keyboardType="email-address"
            placeholder="Email"
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, password: text })}
            value={value.password}
            placeholder="Contraseña"
            placeholderTextColor="#473261"
            underlineColorAndroid="transparent"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.push('Forgot Password')}>
          <Text style={styles.forgotPassword}>¿Has olvidado la contraseña?</Text>
        </TouchableOpacity>

        {!!value.error && <Text style={styles.error}>*{value.error}</Text>}
        <View style={styles.buttonContainer}>
          <Pressable style={GlobalStyles.submitButtonGlobal} onPress={onSubmit}>
            <Text style={GlobalStyles.submitText}>Iniciar Sesión</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.helperText}>¿Aún no tienes cuenta?</Text>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Sign Up')}
        >
          <Text style={GlobalStyles.submitText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingHorizontal: 25,
    paddingTop: StatusBar.currentHeight ? 32 + StatusBar.currentHeight : 0
  },
  title: {
    color: '#833AB4',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16
  },
  subtitle: {
    color: '#A16AC7',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16
  },
  registerInputs: {
    marginTop: 32
  },
  input: {
    paddingVertical: 19,
    paddingHorizontal: 12,
    color: '#473261',
    backgroundColor: '#A296B0',
    borderRadius: 10,
    textAlignVertical: 'center',
    // height: Platform.OS == "android" ? 200 : 100 ,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginVertical: 16
  },
  forgotPassword: {
    color: '#833AB4',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'right'
  },
  helperText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A16AC7',
    textAlign: 'center',
    marginVertical: 2
  },
  buttonContainer: {
    marginBottom: 16,
    marginTop: 48
  },
  registerButton: {
    paddingVertical: 20,
    backgroundColor: '#F9B41F',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 64,
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
  error: {
    marginTop: 10,
    padding: 10,
    color: '#F61C0D'
  }
})

export default SignInScreen
