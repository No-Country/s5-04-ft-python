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

const ForgotPassword = () => {
    const { forgotPassword } = useAuth()

    const initialValues = {
        email: '',
    }

    const clientSchema = Yup.object().shape({
        email: Yup.string()
            .email('* Email no válido')
            .required('* El email es requerido'),
    })

    const handleSubmit = (values) => {
        forgotPassword(values)
    }
    return (
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
                    <Form style={{ width: '35rem' }} onSubmit={handleSubmit}>
                        <Stack padding="3px" gap="1rem">
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
                                Recuperar password
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Stack>
    )
}

export default ForgotPassword
