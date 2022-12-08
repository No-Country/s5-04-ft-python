import React, { createContext, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { API_ROUTE } from './AuthContext'

export const GroupContext = createContext({})

export const GroupProvider = ({ children }) => {
    const [grupos, setGroups] = useState([])
    const { data } = useAuth()

    const createGroup = async (values) => {
        console.log(values)
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${data.tokens.access}`,
                },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            await fetch(`${API_ROUTE}/groups/group/`, config)
                .then((response) => response.json())
                .then(
                    (data) => console.log(data),
                    localStorage.getItem('auth_tokens')
                )
        } catch (error) {
            console.log(error)
        }
    }

    const getGroups = async (values) => {
        console.log(values)
        try {
            const config = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${data.tokens.access}`,
                },
                mode: 'cors',
                body: JSON.stringify(values),
            }
            await fetch(`${API_ROUTE}/groups/group/`, config)
                .then((response) => response.json())
                .then((grupos) => {
                    setGroups(grupos)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GroupContext.Provider
            value={{ createGroup, getGroups, grupos, setGroups }}
        >
            {children}
        </GroupContext.Provider>
    )
}
