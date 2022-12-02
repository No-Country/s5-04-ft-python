import { Alert, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const RouteAlert = () => {
    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <Alert variant="outlined" severity="info">
                Debes
                <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: '#000' }}
                >
                    <b> iniciar sesión </b>
                </Link>
                para crear una ruta
            </Alert>
        </Stack>
    )
}

export default RouteAlert
