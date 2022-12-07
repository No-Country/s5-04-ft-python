import React, { createContext } from 'react'
import { API_ROUTE } from './AuthContext'

export const GroupContext = createContext()

export const GroupProvider = ({ children }) => {
    const createGroup = async (values) => {
        console.log(values)
        try {
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            await fetch(`${API_ROUTE}/groups/group/`, config)
                .then((response) => response.json())
                .then((data) => console.log(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GroupContext.Provider value={{ createGroup }}>
            {children}
        </GroupContext.Provider>
    )
}
