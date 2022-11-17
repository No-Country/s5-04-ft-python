import axios from 'axios'
import { Toast } from '../utils/swalToast'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

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
                .then((data) => setDataAuth(data))

            Toast.fire({
                icon: 'success',
                title: `Cuenta creada correctamente`,
            })
            // navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ createUser, dataAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
