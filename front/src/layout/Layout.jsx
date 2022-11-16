import React from 'react'
import { Stack, Box } from '@mui/material'
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
            <Box paddingTop={'7rem'}>{children}</Box>
            <Footer />
        </Stack>
    )
}

export default Layout
