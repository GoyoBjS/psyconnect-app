import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import * as SecureStore from 'expo-secure-store'

interface Props {
  email: string
  password: string
}

const auth = getAuth()
export const signup = async (value: Props) => {
  const { email, password } = value
  if (email === '' || password === '') {
    return 'Email and password are mandatory.'
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user.uid
      const docRef = doc(db, 'users', user)
      getDoc(docRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data())
            SecureStore.setItemAsync('user', JSON.stringify(docSnap.data()))
          } else {
            console.log('Document written with ID: ', docRef.id)
          }
        })
        .catch((error) => {
          console.log('Error getting document 1:', error)
          return error.message
        })
    })
    .catch((error) => {
      console.log('Error getting document:', error.message)
      return 'Credenciales invalidas'
    })
}
