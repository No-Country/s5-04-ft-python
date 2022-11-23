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
import ModalCheck from '../components/ModalCheck'
import Loading from '../components/Loading'

const Register = () => {
    const { createUser, dataAuth, loading } = useAuth()

    const clientSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, 'El nombre de usuario es demasiado corto')
            .max(20, 'El nombre de usuario es demasiado largo')
            .required('Campo requerido'),
        fullname: Yup.string()
            .min(3, 'El nombre es demasiado corto')
            .max(25, 'El nombre es demasiado largo')
            .required('Campo requerido'),
        email: Yup.string()
            .email('El email no es valido')
            .required('Campo requerido'),
        password: Yup.string()
            .min(5, 'La contraseña es demasiada corto')
            .max(20, 'La contraseña es demasiada larga')
            .required('Campo requerido'),
        password2: Yup.string().required('Campo requerido'),
    })

    const initialValues = {
        username: '',
        email: '',
        password: '',
        fullname: '',
        password2: '',
    }

    const handleSubmit = (values) => {
        createUser(values)
    }
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Stack
                    width="100%"
                    justifyContent="space-between"
                    flexDirection="row"
                    gap="2rem"
                >
                    {dataAuth?.email ? (
                        <ModalCheck />
                    ) : (
                        <Stack justifyContent="center">
                            <Typography
                                fontSize="24px"
                                fontFamily="Sora"
                                variant="h5"
                                fontWeight="500"
                                justifyContent="center"
                                alignItems="center"
                                marginBottom="2rem"
                            >
                                Crea una cuenta nueva
                            </Typography>
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
                                    <Form
                                        style={{ width: '35rem' }}
                                        onSubmit={handleSubmit}
                                    >
                                        <Stack padding="3px" gap="1rem">
                                            <Stack
                                                justifyContent="flex-start"
                                                width="100%"
                                            >
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    error={
                                                        touched.email &&
                                                        errors.email
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
                                            <Stack
                                                justifyContent="flex-start"
                                                width="100%"
                                            >
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    error={
                                                        touched.fullname &&
                                                        errors.fullname
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
                                            <Stack
                                                justifyContent="flex-start"
                                                width="100%"
                                            >
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    error={
                                                        touched.username &&
                                                        errors.username
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
                                                <Typography
                                                    fontSize="14px"
                                                    color="#707070"
                                                >
                                                    Tu nombre sera publico en tu
                                                    perfil de BikeLovers
                                                </Typography>
                                            </Stack>
                                            <Stack
                                                justifyContent="flex-start"
                                                width="100%"
                                            >
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    error={
                                                        touched.password &&
                                                        errors.password
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
                                                <Typography
                                                    fontSize="14px"
                                                    color="#707070"
                                                >
                                                    Al menos 8 caracteres
                                                </Typography>
                                            </Stack>
                                            <Stack
                                                justifyContent="flex-start"
                                                width="100%"
                                            >
                                                <TextField
                                                    sx={{ width: '100%' }}
                                                    error={
                                                        touched.password &&
                                                        errors.password
                                                            ? true
                                                            : false
                                                    }
                                                    type="password"
                                                    name="password2"
                                                    margin="dense"
                                                    label="Repetir Contraseña*"
                                                    helperText={
                                                        touched.password2 &&
                                                        errors.password2 &&
                                                        errors.password
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password2}
                                                    size="small"
                                                />
                                            </Stack>

                                            <Button
                                                variant="contained"
                                                color="primary"
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
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap="8px"
                            >
                                <Typography>¿Ya tenés cuenta?</Typography>
                                <Typography
                                    color="secondary.dark"
                                    sx={{ textDecoration: 'none' }}
                                    component={Link}
                                    to="/login"
                                >
                                    Iniciá Sesión
                                </Typography>
                            </Stack>
                        </Stack>
                    )}
                    {dataAuth?.email ? (
                        ''
                    ) : (
                        <img
                            src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668526131/Im%C3%A1genes%20UX%20UI/Login-Register/biker_mykuqr.png"
                            alt="bici"
                        />
                    )}
                </Stack>
            )}
        </>
    )
}
export default Register
