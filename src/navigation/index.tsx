import React, { useEffect, useState } from 'react'
import ClientNavigation from './ClientNavigation'
import AuthStack from './AuthNavigation'
// import Loading from "../components/Loading";
import { SafeAreaView } from 'react-native'
import { AuthContext } from '../contexts/AuthContext'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import useUser from '../hooks/useUser'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import * as SecureStore from 'expo-secure-store'

export default function RootNavigation() {
  const auth = getAuth()
  const { getUser } = useUser()
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      const storedUser = getUser()
      if (user) {
        Promise.resolve(user).then((user: any) => {
          console.log('user in useAuthentication', user)
          setUser(user)
        })
      } else if (storedUser) {
        Promise.resolve(storedUser).then((storedUser: any) => {
          console.log('storedUser in useAuthentication', storedUser)
          setUser(storedUser)
        })
      } else setUser(undefined)

      setLoading(false)
    })
  }, [])

  const handleSignIn = async ({ email, password }: any) => {
    if (!email || !password) {
      return 'email or password is empty'
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
              setUser(docSnap.data())
            } else {
              console.log('Document written with ID: ', docRef.id)
              return 'Document written with ID: ' + docRef.id
            }
          })
          .catch((error) => {
            console.log('Error getting document 1:', error)
            return 'Error getting document 1'
          })
      })
      .catch((error) => {
        console.log('Error getting document:', error.message)
        return error.message
      })
  }

  const handleSignOut = async () => {
    const auth = getAuth()
    setUser(undefined)
    await SecureStore.deleteItemAsync('user')
    await SecureStore.deleteItemAsync('token')
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignOut }}>
      {user ? (
        <ClientNavigation />
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <AuthStack />
        </SafeAreaView>
      )}
    </AuthContext.Provider>
  )
}
