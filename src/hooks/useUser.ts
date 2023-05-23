import { useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { getAuth, signOut } from 'firebase/auth'
import { doc, DocumentData, getDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

const useUser = () => {
  const [user, setUser] = useState<DocumentData | undefined>(undefined)

  async function updateUser(user: any) {
    const auth = getAuth()
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
    if (userData) user = JSON.parse(userData)
    const docRef = doc(db, 'users', user.uid)
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) user = docSnap.data()
    })

    return user
  }
  async function deleteUser() {
    const auth = getAuth()
    setUser(undefined)
    await SecureStore.deleteItemAsync('user')
    await SecureStore.deleteItemAsync('token')
    await signOut(auth)
  }

  return { user, updateUser, getUser, deleteUser }
}

export default useUser
