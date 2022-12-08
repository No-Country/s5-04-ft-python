import React, { createContext } from 'react'
import { API_ROUTE } from './AuthContext'

export const RouteContext = createContext()

export const RouteProvider = ({ children }) => {
    const createRoute = async (values) => {
        console.log(values)
        try {
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            await fetch(`${API_ROUTE}/routes/route/`, config)
                .then((response) => response.json())
                .then((data) => console.log(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <RouteContext.Provider value={{ createRoute }}>
            {children}
        </RouteContext.Provider>
    )
}
