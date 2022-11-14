import React from 'react'
import { Stack } from '@mui/material'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Stack
            spacing="0"
            width="100%"
            alignItems="center"
            height="100vh"
            justifyContent="space-between"
        >
            <Navbar />
            {children}
            <Footer />
        </Stack>
    )
}

export default Layout
