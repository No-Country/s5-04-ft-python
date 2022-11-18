import axios from 'axios'
import { Toast } from '../utils/swalToast'
import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    const [dataAuth, setDataAuth] = useState({})
    const [isLogged, setIsLogged] = useState(false)
    console.log(dataAuth)

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

    const signIn = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }

            await fetch(`${API_ROUTE}/auth/login/`, requestOptions)
                .then((response) => response.json())
                .then((data) =>
                    console.log(
                        `Bienvenido, ${data.username} fuiste logueado con éxito`,
                        data
                    )
                )
            setIsLogged(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ createUser, signIn, dataAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
