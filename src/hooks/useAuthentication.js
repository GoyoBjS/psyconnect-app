import React, { useLayoutEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import useUser from './useUser'

const auth = getAuth()

export function useAuthentication() {
  const { getUser } = useUser()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      let storedUser = getUser()

      if (user) setUser(user)
      else setUser(storedUser)

      setLoading(false)
    })
  }, [])

  return {
    user,
    loading
  }
}
