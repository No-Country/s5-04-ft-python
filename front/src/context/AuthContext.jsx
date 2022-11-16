import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [dataAuth, setDataAuth] = useState({})
    console.log(dataAuth)
    const createUser = async (values) => {
        try {
            await axios
                .post('post', values)
                .then((response) => response.json())
                .then(
                    (response) => setDataAuth(response),
                    window.localStorage.setItem(
                        'user',
                        JSON.stringify(response)
                    )
                )
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ createUser }}>
            {children}
        </AuthContext.Provider>
    )
}
