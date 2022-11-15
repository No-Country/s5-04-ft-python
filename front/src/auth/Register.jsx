import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const { authData } = useAuth()
    console.log(authData)

    const clientSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'nickname is too short')
            .max(20, 'nickname is too long!')
            .required('This field is required'),
        fullname: Yup.string()
            .min(3, 'Full Name is too short')
            .max(25, 'Full Name is too long!')
            .required('This field is required'),
        email: Yup.string()
            .email('Invalid Email')
            .required('This field is required'),
        password: Yup.string()
            .min(8, 'Password is too short')
            .max(20, 'Password is too long!')
            .required('This field is required')
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                'Password must contain at least 8 characters, one uppercase, one number and one special case character'
            ),
    })

    const initialValues = {
        email: '',
        fullname: '',
        username: '',
        password: '',
    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <Stack>
            <Typography
                fontSize="50px"
                variant="h1"
                justifyContent="center"
                alignItems="center"
            >
                Crea una cuenta nueva
            </Typography>
            <Stack>
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                    validationSchema={clientSchema}
                >
                    {({
                        handleSubmit,
                        errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.email && errors.email
                                                ? true
                                                : false
                                        }
                                        type="email"
                                        name="email"
                                        margin="dense"
                                        label="Email*"
                                        placeholder="email@example.com"
                                        helperText={
                                            touched.email &&
                                            errors.email &&
                                            errors.email
                                        }
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.fullname && errors.fullname
                                                ? true
                                                : false
                                        }
                                        type="text"
                                        name="fullname"
                                        margin="dense"
                                        label="Nombre Completo*"
                                        helperText={
                                            touched.fullname &&
                                            errors.fullname &&
                                            errors.fullname
                                        }
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fullname}
                                    />
                                </Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.username && errors.username
                                                ? true
                                                : false
                                        }
                                        type="text"
                                        name="username"
                                        margin="dense"
                                        label="Nombre de usuario*"
                                        helperText={
                                            touched.username &&
                                            errors.username &&
                                            errors.username
                                        }
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                </Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.password && errors.password
                                                ? true
                                                : false
                                        }
                                        type="password"
                                        name="password"
                                        margin="dense"
                                        label="Contraseña*"
                                        helperText={
                                            touched.password &&
                                            errors.password &&
                                            errors.password
                                        }
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.password && errors.password
                                                ? true
                                                : false
                                        }
                                        type="password"
                                        name="password"
                                        margin="dense"
                                        label="Repetir Contraseña*"
                                        helperText={
                                            touched.password &&
                                            errors.password &&
                                            errors.password
                                        }
                                        size="small"
                                    />
                                </Stack>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    sx={{
                                        color: 'white',
                                        textTransform: 'none',
                                        width: '100%',
                                        fontSize: '16px',
                                        alignSelf: 'end',
                                        margin: '1rem',
                                        mr: '0',
                                    }}
                                    size="small"
                                >
                                    Crear cuenta
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <Stack direction="row" alignItems="center" gap="8px">
                    <Typography>¿Ya tenes cuenta?</Typography>
                    <Typography
                        sx={{ color: 'blue', textDecoration: 'none' }}
                        component={Link}
                        to="/login"
                    >
                        Inicio Sesion
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Register
