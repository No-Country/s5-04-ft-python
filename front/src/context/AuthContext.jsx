import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({})

    return (
        <AuthContext.Provider value={{ setAuthData, authData }}>
            {children}
        </AuthContext.Provider>
    )
}
