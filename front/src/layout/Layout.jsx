import React from 'react'
import { Stack, Box } from '@mui/material'
import Footer from './Footer'
import DrawerMenu from './navbar/DrawerMenu'

const Layout = ({ children }) => {
    return (
        <Stack
            spacing="0"
            width="100%"
            alignItems="center"
            height="100vh"
            justifyContent="space-between"
        >
            <DrawerMenu />
            <Box paddingTop={'7rem'}>{children}</Box>
            <Footer />
        </Stack>
    )
}

export default Layout
