// 1. create UserContext

import { createContext } from 'react'

export const UserContext = createContext(null)

// 2. create UserProvider

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        user: {
          email: 'test@mail.com',
          job: 'Developer',
        },
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
