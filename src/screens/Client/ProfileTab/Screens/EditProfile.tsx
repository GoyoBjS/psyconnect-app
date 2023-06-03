import React, { useEffect, useState } from 'react'
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../../../config/firebase'
import GlobalStyles from '../../../../styles/GlobalStyles'
import useUser from '../../../../hooks/useUser'

const EditProfile = ({ navigation }: any) => {
  const { getUser, updateUser } = useUser()
  const [userData, setUserData] = useState<any>()
  const [error, setError] = useState('')

  useEffect(() => {
    console.log('EditProfile')
    getUser().then((user) => {
      setUserData(user)
    })
  }, [])

  const handleSubmit = async () => {
    const user = auth.currentUser || (await getUser())
    const userRef = doc(db, 'users', user?.uid)
    await updateDoc(userRef, {
      name: userData.name,
      surname: userData.surname
      // gender: userData.gender
    })
    await updateUser(userData)
  }

  const validateFields = () => {
    Keyboard.dismiss()
    if (!userData.name || userData.name.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres')
      return false
    }
    if (!userData.surname || userData.surname.length < 3) {
      setError('El apellido debe tener al menos 3 caracteres')
      return false
    }
    // if (!userData.gender || userData.gender === 'Selecciona tu género') {
    //   setError('Debes seleccionar un género')
    //   return false
    // }
    setError('')
    handleSubmit().then(() => {
      navigation.goBack()
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nombre de perfil</Text>
      <TextInput
        style={GlobalStyles.input}
        onChangeText={(name) => setUserData({ ...userData, name })}
        value={userData?.name}
        placeholderTextColor="#A5A5A5"
        underlineColorAndroid="transparent"
        keyboardType="default"
      />
      <Text style={styles.title}>Apellidos</Text>
      <TextInput
        style={GlobalStyles.input}
        onChangeText={(surname) => setUserData({ ...userData, surname })}
        value={userData?.surname}
        placeholderTextColor="#A5A5A5"
        underlineColorAndroid="transparent"
        keyboardType="default"
      />

      {/*<Text style={styles.title}>Género</Text>*/}
      {/*<View style={[GlobalStyles.input, { paddingVertical: 4, paddingHorizontal: 2 }]}>*/}
      {/*  <Picker*/}
      {/*    selectedValue={userData?.gender}*/}
      {/*    onValueChange={(gender) => setUserData({ ...userData, gender })}*/}
      {/*    onFocus={() => Keyboard.dismiss()}*/}
      {/*  >*/}
      {/*    <Picker.Item label="Selecciona tu género" value="" />*/}
      {/*    <Picker.Item label="No Binario" value="NoBinary" />*/}
      {/*    <Picker.Item label="Hombre" value="Men" />*/}
      {/*    <Picker.Item label="Mujer" value="Women" />*/}
      {/*  </Picker>*/}
      {/*</View>*/}

      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => validateFields()} style={GlobalStyles.submitButtonGlobal}>
          <Text style={GlobalStyles.submitText}>Confirmar</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDF9FF',
    paddingHorizontal: 25,
    paddingTop: 16,
    flex: 1
  },
  profileImg: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  profileBlur: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  blurImg: {
    textAlign: 'center',
    opacity: 0.9
  },
  title: {
    color: '#473261',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    marginTop: 48,
    marginBottom: 32
  },
  error: {
    color: 'red',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 16
  }
})
