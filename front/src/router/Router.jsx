import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Router
