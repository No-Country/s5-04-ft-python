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
    const [data, setData] = useState({})
    const [userRol, setUserRol] = useState('')
    const [username, setUserName] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(false)
    // console.log(dataAuth)

    useEffect(() => {
        async function preload() {
            if (dataAuth.token) await refreshToken()
        }
    }, [])

    useEffect(() => {
        const loggedUserJSON = localStorage.getItem('tokens')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setData(user)
            // data.tokens.refresh
            console.log(data);
        }
    }, []);

    const createUser = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            setLoading(true)
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
        } finally {
            setLoading(false)
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
                .then((data) => {
                    // console.log(data)
                    setIsLogged(true)
                    setUserName(data.username)
                    localStorage.setItem('tokens', JSON.stringify(data))
                })
                Toast.fire({
                    icon: 'success',
                    title: `Usuario loguado satisfactoriamente!`,
                })
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        

    const signOut = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }

            await fetch(`${API_ROUTE}/auth/logout/`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.tokens.refresh)
                    setIsLogged(false)
                    localStorage.removeItem('tokens')
                })
                
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const forgotPassword = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            setLoading(true)
            await fetch(
                `${API_ROUTE}/auth/request-reset-email/`,
                requestOptions
            )
                .then((response) => response.json())
                .then((data) => console.log(data))

            Toast.fire({
                icon: 'success',
                title: `Email de recuperacion enviado!`,
            })
            // navigate('/login')
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                createUser,
                signIn,
                signOut,
                isLogged,
                setIsLogged,
                username,
                dataAuth,
                loading,
                forgotPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
