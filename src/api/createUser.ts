import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

export const createUser = async (user: any, setError: any) => {
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((response) => {
      const userResponse = response.user
      const userRef = collection(db, 'users')
      setDoc(doc(userRef, userResponse.uid), {
        uid: userResponse.uid,
        name: user.name,
        surname: user.surname,
        // birthMonth: user.birthMonth,
        // birthYear: user.birthYear,
        // gender: user.gender,
        email: user.email,
        authProvider: 'local'
      })
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError(`Email address ${user.email} already in use.`)
          break
        case 'auth/invalid-email':
          setError(`Email address ${user.email} is invalid.`)
          break
        case 'auth/operation-not-allowed':
          setError(`Error during sign up.`)
          break
        case 'auth/weak-password':
          setError(
            'Password is not strong enough. Add additional characters including special characters and numbers.'
          )
          break
        default:
          setError(error.message)
          break
      }
    })
}
