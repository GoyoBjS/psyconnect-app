import { useEffect } from 'react'
import useUser from '../hooks/useUser'
import { useNavigation } from '@react-navigation/native'

export const useSignout = () => {
  console.log('signout')

  const navigation = useNavigation()
  const { user, deleteUser } = useUser()
  useEffect(() => {
    deleteUser()
    navigation.navigate('Login')
  }, [])
}
