import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [dataAuth, setDataAuth] = useState({})
    console.log(dataAuth)

    // const createUser = async (values) => {
    //     try {
    //         await axios
    //             .post(`${API_ROUTE}/auth/register/`, values)
    //             .then((response) => response.json())
    //             .then(
    //                 (response) => console.log(response),
    //                 window.localStorage.setItem(
    //                     'user',
    //                     JSON.stringify(response)
    //                 )
    //             )
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const createUser = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            await fetch(`${API_ROUTE}/auth/register/`, requestOptions)
                .then((response) => response.json())
                .then((data) => console.log(data))
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