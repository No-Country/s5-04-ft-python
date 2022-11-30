import axios from 'axios'
import { Toast } from '../utils/swalToast'
import { createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const AuthContext = createContext({})

const initialValues = {
    email: '',
    id: '',
    tokens: '',
    username: '',
}

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    const [dataAuth, setDataAuth] = useState({})
    const [data, setData] = useState({})
    const [userRol, setUserRol] = useState('')
    const [username, setUserName] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    const [loading, setLoading] = useState(false)
    // console.log(dataAuth)

    // useEffect(() => {
    //     async function preload() {
    //         if (dataAuth.token) await refreshToken()
    //     }
    //     preload()
    // }, [])

    useEffect(() => {
        async function preload() {
            await loadStorageData()
        }
        preload()
    }, [])

    const loadStorageData = async () => {
        try {
            const authDataSerialized = await localStorage.getItem('auth_tokens')
            if (authDataSerialized) {
                const authDataToken = JSON.parse(authDataSerialized)
                setData(authDataToken)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     const loggedUserJSON = localStorage.getItem('auth_tokens')
    //     if (loggedUserJSON) {
    //         const user = JSON.parse(loggedUserJSON)
    //         setData(user)
    //         // data.auth_tokens.refresh
    //         // console.log(data.auth_tokens.refresh)
    //     }

    //     if (data.tokens) {
    //         setIsLogged(true)
    //     }
    // }, [])

    console.log(data)

    const createUser = async (values) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
            Toast.fire({
                icon: 'error',
                title: `Ocurrió un error al crear tu cuenta`,
            })
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
                    // console.log(data.auth_tokens)
                    setIsLogged(true)
                    setUserName(data.username)
                    localStorage.setItem('auth_tokens', JSON.stringify(data))
                    setData(data.tokens.access)
                    console.log(data.tokens.access)
                })
            navigate('/')
            Toast.fire({
                icon: 'success',
                title: `Usuario logueado satisfactoriamente!`,
            })
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: `Ocurrió un error al iniciar sesión`,
            })
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
                .then(() => {
                    // console.log(localStorage.getItem('auth_tokens'))
                    setIsLogged(false)
                    localStorage.removeItem('auth_tokens')
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
                data,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
