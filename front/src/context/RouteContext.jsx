import React from 'react'

export const RouteContext = createContext()

export const RouteProvider = ({children}) => {
  return (
    <RouteContext.Provider>
        {children}
    </RouteContext.Provider>
  )
}
