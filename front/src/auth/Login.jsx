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
            5,
            'La password es demasiado corta, debe contener al menos 5 caracteres'
        )
        .max(
            20,
            'La contraseña ingresada es demasiado larga, debe ser menor o igual a 20 caracteres'
        )
        // .matches(
        //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //     'La contraseña debe contener al menos una letra mayúscula y un número entero'
        // )
        .required('* La contraseña es requerida'),
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
            width={{ xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' }}
            height="100%"
            // margin={{ lg: '0 auto'}}
            marginLeft={{ xs: '250px' }}
            // padding={{ xs: '100%', sm: '100%', md: '5rem' }}
        >
            <Stack
                alignItems="center"
                justifyContent="space-between"
                // width="100%"
                // height="500px"
                width={{
                    xs: '100%',
                    sm: '100%',
                    md: '100%',
                    lg: '100%',
                    xl: '100%',
                }}
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
                    margin="1rem"
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
                                        to="/forgotPassword"
                                        href="#"
                                        variant="body2"
                                        color="secondary.main"
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        ¿Olvidaste la contraseña?
                                    </Link>
                                    <Stack
                                        flexDirection={'row'}
                                        height={'3rem'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        sx={{ margin: '1rem 0 1rem 0' }}
                                    >
                                        <Button
                                            variant="contained"
                                            type="submit"
                                        >
                                            Iniciar Sesión
                                        </Button>
                                    </Stack>
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
                                        padding={'1rem'}
                                    >
                                        <Divider width={'50%'} />
                                        <Typography px={'3px'}> o </Typography>
                                        <Divider width={'50%'} />
                                    </Stack>
                                    <Stack
                                        flexDirection={'row'}
                                        height={'3rem'}
                                        alignItems={'end'}
                                        justifyContent={'center'}
                                    >
                                        <Link
                                            to="/facial"
                                            variant="body2"
                                            color="secondary.main"
                                            sx={{ textDecoration: 'none' }}
                                        >
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                sx={{
                                                    backgroundColor: '#049AAA',
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Reconocimiento Facial
                                            </Button>
                                        </Link>
                                    </Stack>
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
