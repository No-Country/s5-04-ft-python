import { Button, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

const ModalCheck = () => {
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
                        Verifica tu email
                    </Typography>
                    <Typography>
                        Hola {dataAuth?.username}! Necesitas verificar tu email
                        para completar el registro
                    </Typography>
                    <Stack alignItems="center">
                        <img
                            src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668526128/Im%C3%A1genes%20UX%20UI/Login-Register/checkemail_jxabwr.png"
                            alt="foto verificacion"
                            style={{ width: '250px', height: '250px' }}
                        />
                    </Stack>
                    <Typography>
                        Te hemos enviado un email a {dataAuth?.email} con un
                        enlace para verificar tu cuenta. Si no has recibido el
                        email después de unos minutos, por favor revisa tu
                        carpeta de spam
                    </Typography>
                    <Stack alignItems="center">
                        <Button
                            sx={{
                                color: '#049AAA',
                                backgroundColor: 'white',
                                border: '1px solid',
                                borderColor: '#049AAA',
                                padding: '13px',
                            }}
                        >
                            Reenviar Email
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ModalCheck
