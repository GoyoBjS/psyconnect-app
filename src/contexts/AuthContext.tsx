import { createContext } from 'react'

interface AuthContextType {
  handleSignIn: (value: any) => Promise<string | undefined>
  handleSignOut: () => Promise<void>
}
export const AuthContext = createContext({} as AuthContextType)
