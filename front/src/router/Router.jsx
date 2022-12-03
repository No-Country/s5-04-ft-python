import React from 'react'
import Home from '../pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Facial from '../auth/Facial'
import HomePage from '../pages/HomePage'
import Rutas from '../pages/Rutas'
import Grupos from '../pages/Grupos'
import ForgotPassword from '../pages/ForgotPassword'
import ModalVerified from '../components/ModalVerified'
import CardGroups from '../components/CardGroups'
import NewGroups from '../components/NewGroups'
import Settings from '../pages/Settings'
import NewRoute from '../components/NewRoute'
import GroupDetail from '../pages/GroupDetail'

const Router = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/emailConfirmed" element={<ModalVerified />} />
            <Route path="/facial" element={<Facial />} />
            <Route path="/group" element={<Grupos />} />
            <Route path="/newGroup" element={<NewGroups />} />
            <Route path="/group/:id" element={<CardGroups />} />
            <Route path="/group-detail/:id" element={<GroupDetail />} />
            <Route path="/rutas" element={<Rutas />} />
            <Route path="/newRoute" element={<NewRoute />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default Router
