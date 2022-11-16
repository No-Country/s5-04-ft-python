import {
    Box,
    Button,
    Divider,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
     const { loginUser } = useAuth()
    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="80%"
            height="100%"
        >
            <Stack
                alignItems="center"
                justifyContent="space-between"
                width="80%"
                height="500px"
                sx={{ backgroundColor: '#F6F8F8' }}
                direction="row"
                paddingLeft={'1rem'}
            >
                <Stack
                    width="50%"
                    height="450px"
                    justifyContent="space-between"
                    sx={{ border: '0.5px solid #333' }}
                    padding={'1rem'}
                >
                    <Typography variant="h6">
                        Inicia sesión en BikeLovers
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        placeholder="email@example.com"
                        variant="outlined"
                        size="small"
                        color="info"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        size="small"
                        color="info"
                    />
                    <Link
                        href="#"
                        variant="body2"
                        color="secondary.main"
                        sx={{ textDecoration: 'none' }}
                    >
                        ¿Olvidaste la contraseña?
                    </Link>
                    <Button
                        variant="contained"
                        // sx={{ backgroundColor: '#000' }}
                    >
                        Iniciar Sesión
                    </Button>
                    <Typography>
                        ¿No tenés cuenta?
                        <Link
                            href="/"
                            variant="body2"
                            color="secondary.main"
                            sx={{ textDecoration: 'none' }}
                        >
                            {' '}
                            crea una
                        </Link>
                    </Typography>
                    <Stack
                        flexDirection={'row'}
                        height={'2px'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Divider width={'50%'} />
                        <Typography px={'3px'}> o </Typography>
                        <Divider width={'45%'} />
                    </Stack>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#049AAA', margin: '1rem 0' }}
                    >
                        Reconocimiento Facial
                    </Button>
                </Stack>
                <Box height={'100%'}>
                    <img
                        height={'100%'}
                        width={'100%'}
                        src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668526131/Im%C3%A1genes%20UX%20UI/Login-Register/biker_mykuqr.png"
                        alt="Login Image"
                    />
                </Box>
            </Stack>
        </Stack>
    )
}

export default Login
