import { useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { Auth, getAuth } from 'firebase/auth'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

const useUser = () => {
  const [user, setUser] = useState<DocumentData | undefined>(undefined)

  async function updateUser(user: any) {
    const auth: Auth = getAuth()
    console.log('updateUser', user)
    if (user) return SecureStore.setItemAsync('user', JSON.stringify(user))
    const { currentUser } = auth
    const docRef = doc(db, 'users', currentUser!.uid)
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setUser(docSnap.data())
        return SecureStore.setItemAsync('user', JSON.stringify(docSnap.data()))
      }
      setUser(undefined)
    })
  }

  async function getUser() {
    let user
    const userData = await SecureStore.getItemAsync('user')
    console.log('getUser', userData)
    if (userData) {
      user = JSON.parse(userData)
      // return setUser((user) =>user = JSON.parse(userData));
    }
    const { currentUser } = getAuth()
    console.log('currentUser', currentUser)
    const docRef = doc(db, 'users', user.uid)
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        user = docSnap.data()
        // return setUser(docSnap.data());
      }
      // setUser(null);
    })

    return user
  }
  async function deleteUser() {
    setUser(undefined)
    return SecureStore.deleteItemAsync('user')
  }

  return { user, updateUser, getUser, deleteUser }
}

export default useUser
