import React from 'react'

export const GroupContext = createContext()

export const GroupProvider = ({children}) => {
  return (
    <GroupContext.Provider>
        {children}
    </GroupContext.Provider>
  )
}
