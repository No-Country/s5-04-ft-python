import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Home = () => {
    const { authData } = useAuth()
    console.log(authData)

    return <div>Home</div>
}

export default Home
