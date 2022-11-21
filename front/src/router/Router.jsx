import React from 'react'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Facial from '../auth/Facial'
import ForgotPassword from '../pages/ForgotPassword'

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/facial" element={<Facial />} />
        </Routes>
    )
}

export default Router
