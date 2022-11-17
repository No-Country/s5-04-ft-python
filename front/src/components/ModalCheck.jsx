import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../hooks/useAuth'

const ModalCheck = () => {
    const { dataAuth } = useAuth()
    return (
        <Stack>
            <Typography>Verifica tu email</Typography>
            <Stack>
                <Typography>
                    Hola {dataAuth?.username}! Necesitas verificar tu email para
                    completar el registro
                </Typography>
                <img src="" alt="foto verificacion" />
                <Typography>
                    Te hemos enviado un email a {dataAuth?.email} con un enlace
                    para verificar tu cuenta. Si no has recibido el email
                    después de unos minutos, por favor revisa tu carpeta de spam
                </Typography>
                <Button>Reenviar</Button>
            </Stack>
        </Stack>
    )
}

export default ModalCheck
