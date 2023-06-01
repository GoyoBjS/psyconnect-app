import { createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../config/firebase'

export const createUser = async (user: any, setError: any) => {
  const { name, surname, email, password } = user
  if (!name || !surname || !email || !password) {
    return setError('Por favor, rellena todos los campos.')
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      const userResponse = response.user
      const userRef = collection(db, 'users')
      setDoc(doc(userRef, userResponse.uid), {
        uid: userResponse.uid,
        name,
        surname,
        // birthMonth: user.birthMonth,
        // birthYear: user.birthYear,
        // gender: user.gender,
        email,
        authProvider: 'local'
      })
    })
    .catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError(`Email ${user.email} en uso.`)
          break
        case 'auth/invalid-email':
          setError(`Email  ${user.email} es invalido.`)
          break
        case 'auth/operation-not-allowed':
          setError(`Error al crear usuario.`)
          break
        case 'auth/weak-password':
          setError('La contraseña es muy débil. Debe tener al menos 6 caracteres.')
          break
        default:
          setError(error.message)
          break
      }
    })
}
