import { Stack, Typography, Button, TextField, styled } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import * as Yup from 'yup'
import { useAuth } from '../hooks/useAuth'
import { useRoute } from '../hooks/useRoute'

const ButtonStyled = styled(Button)({
    backgroundColor: 'white',
    color: '#ff001e',
    border: '1px solid',
    borderColor: '#ff001e',
    width: '100%',
    marginTop: '18px',
    '&:hover': {
        backgroundColor: '#ff001e',
        border: '1px solid',
        borderColor: '#ff001e',
        boxShadow: 'none',
        color: 'white',
    },
})

const ButtonStyledCancel = styled(Button)({
    backgroundColor: 'white',
    color: '#049AAA',
    border: '1px solid',
    width: '30%',
    marginTop: '18px',
    '&:hover': {
        backgroundColor: '#049AAA',
        borderColor: '#049AAA',
        boxShadow: 'none',
        color: 'white',
    },
})

const NewRoute = () => {
    const { createRoute } = useRoute()
    const { data } = useAuth()

    console.log(data)

    const clientSchema = Yup.object().shape({
        name_route: Yup.string()
            .min(3, 'El nombre de usuario es demasiado corto')
            .required('* El nombre de la ruta es requerido'),
    })

    const initialValues = {
        name_route: '',
        distance: '22',
        time: '2022-12-07T17:21:22.598Z',
        dificulty: 'Easy',
        latitude: '2',
        longitude: '2',
        user_id: data.id,
    }

    const handleSubmit = (values) => {
        console.log(values)
        createRoute(values)
    }

    return (
        <Stack alignItems={'center'}>
            <Stack marginLeft="16rem" paddingRight="20rem">
                <Typography
                    fontSize="24px"
                    fontFamily="Inter"
                    variant="h5"
                    fontWeight="600"
                >
                    Crear Ruta
                </Typography>
                <Stack marginTop="1.5rem">
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        validationSchema={clientSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
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
                                <Stack marginBottom="15px">
                                    <Typography
                                        fontSize="20px"
                                        fontFamily="Inter"
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        Nombre
                                    </Typography>
                                    <Typography
                                        marginTop="5px"
                                        fontSize="15px"
                                        fontFamily="Inter"
                                        variant="h5"
                                        fontWeight="300"
                                    >
                                        Elige un nombre que informe de forma
                                        clara el camino de esta ruta.
                                    </Typography>
                                    <TextField
                                        sx={{
                                            width: '100%',
                                            marginTop: '1rem',
                                        }}
                                        label="Nombre de la ruta"
                                        type="text"
                                        name="name_route"
                                        margin="dense"
                                        error={
                                            touched.name_route &&
                                            errors.name_route
                                        }
                                        helperText={
                                            touched.name_route &&
                                            errors.name_route &&
                                            errors.name_route
                                        }
                                        size="small"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name_route}
                                    />
                                </Stack>

                                <Stack direction="row" gap="1rem">
                                    <ButtonStyled type="submit">
                                        Crear Ruta
                                    </ButtonStyled>
                                    <ButtonStyledCancel>
                                        Cancelar
                                    </ButtonStyledCancel>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NewRoute
