import React from 'react'
import Home from '../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Facial from '../auth/Facial'
import HomePage from '../pages/HomePage'
import Rutas from '../pages/Rutas'
import Grupos from '../pages/Grupos'

const Router = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/facial" element={<Facial />} />
            <Route path="/grupos" element={<Grupos />} />
            <Route path="/rutas" element={<Rutas />} />
        </Routes>
    )
}

export default Router
