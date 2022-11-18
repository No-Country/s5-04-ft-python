import React from 'react'
import { Stack, Box } from '@mui/material'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Stack spacing="0" width="100%" alignItems="center" height="100vh">
            <Stack width="100%" height="100%" direction="row">
                {children}
            </Stack>
        </Stack>
    )
}

export default Layout
