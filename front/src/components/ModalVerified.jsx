import { Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

const ModalVerified = () => {
    const { dataAuth } = useAuth()
    return (
        <Box
            sx={{
                backgroundColor: '#dadada',
                padding: '1rem',
                borderRadius: '3px',
                boxShadow: '0px 2px 1px gray',
                maxWidth: '800px',
            }}
        >
            <Stack>
                <Stack gap="2rem">
                    <Typography
                        fontSize="24px"
                        fontFamily="Sora"
                        fontWeight="600"
                    >
                        Email verificado
                    </Typography>
                    <Typography>
                        Hola {dataAuth?.username}! Tu email fue verificado
                        correctamentamente, haz click en el botón de abajo para
                        iniciar sesión en tu cuenta
                    </Typography>
                    <Stack alignItems="center">
                        <img
                            src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668526127/Im%C3%A1genes%20UX%20UI/Login-Register/verified_rfg9ew.png"
                            alt="foto verificacion"
                            style={{ width: '250px', height: '250px' }}
                        />
                    </Stack>
                    <Stack alignItems="center">
                        <Button
                            sx={{
                                color: 'white',
                                backgroundColor: 'red',
                                borderRadius: '3px',
                                padding: '13px',
                            }}
                        >
                            Continuar
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ModalVerified
