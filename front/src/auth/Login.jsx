import {
    Box,
    Button,
    Divider,
    FormControl,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'

const initialForm = {
    email: '',
    password: '',
}

const LOGIN_FORM_VALIDATIONS = Yup.object().shape({
    email: Yup.string()
        .email('* Email no válido')
        .required('* El email es requerido'),
    password: Yup.string()
        .min(
            3,
            'La password es demasiado corta, debe contener más de 8 caracteres'
        )
        .required('*La contraseña es requerida'),
})

const Login = () => {
    const { signIn } = useAuth()

    const handleSubmit = (values) => {
        signIn(values)
    }

    return (
        <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            width="80%"
            height="100%"
            margin={'0 auto'}
        >
            <Stack
                alignItems="center"
                justifyContent="space-between"
                width="100%"
                height="500px"
                sx={{ backgroundColor: '#F6F8F8' }}
                direction="row"
                paddingLeft={'1rem'}
            >
                <Stack
                    width="50%"
                    height="450px"
                    sx={{ border: '0.5px solid #333' }}
                    padding={'1rem'}
                >
                    <Typography variant="h6">
                        Inicia sesión en BikeLovers
                    </Typography>
                    <Formik
                        initialValues={initialForm}
                        validationSchema={LOGIN_FORM_VALIDATIONS}
                        enableReinitialize={true}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values)
                            resetForm()
                        }}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                            values,
                            handleChange,
                            handleBlur,
                        }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <Stack
                                        width="100%"
                                        padding={{
                                            xs: '1rem',
                                            sm: '0',
                                            lg: '1rem 0',
                                            xl: '1rem 0',
                                        }}
                                    >
                                        <TextField
                                            id="email"
                                            type="email"
                                            name="email"
                                            label="Email"
                                            placeholder="email@example.com"
                                            variant="outlined"
                                            size="small"
                                            color="info"
                                            error={
                                                touched.email && errors.email
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                touched.email &&
                                                errors.email &&
                                                errors.email
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Stack>
                                    <Stack
                                        width="100%"
                                        padding={{
                                            xs: '1rem',
                                            sm: '0',
                                            lg: '0 0 1rem 0',
                                            xl: '0 0 1rem 0',
                                        }}
                                    >
                                        <TextField
                                            id="password"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            variant="outlined"
                                            size="small"
                                            color="info"
                                            error={
                                                touched.password &&
                                                errors.password
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                touched.password &&
                                                errors.password &&
                                                errors.password
                                            }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Stack>
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
                                        type="submit"
                                        sx={{ margin:'1rem 0 1rem 0' }}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                    <Typography>
                                        ¿No tenés cuenta?
                                        <Link
                                            to="/register"
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
                                        <Divider width={'50%'} />
                                    </Stack>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#049AAA',
                                            margin: '1rem 0',
                                        }}
                                    >
                                        Reconocimiento Facial
                                    </Button>
                                </Form>
                            )
                        }}
                    </Formik>
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
