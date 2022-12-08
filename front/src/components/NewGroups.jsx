import { Stack, Typography, TextField, Button, styled } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { useGroup } from '../hooks/useGroup'

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

const NewGroups = () => {
    const { createGroup } = useGroup()

    const clientSchema = Yup.object().shape({
        name_group: Yup.string().min(
            3,
            'El nombre de usuario es demasiado corto'
        ),
    })

    const initialValues = {
        name_group: '',
        description: '',
        city: '',
        event: {
            title: 'test4',
            description: 'test3',
            start_route: 'test2',
            end_route: 'test1',
            start_date: 'test',
            end_date: 'tests',
        },
    }

    const handleSubmit = (values) => {
        createGroup(values)
    }

    return (
        <Stack marginLeft="16rem" paddingRight="20rem">
            <Typography
                fontSize="24px"
                fontFamily="Inter"
                variant="h5"
                fontWeight="600"
            >
                Crear Grupo
            </Typography>
            <Stack marginTop="3rem">
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    validationSchema={clientSchema}
                    onSubmit={(handleSubmit)}
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
                                    Nombre del grupo
                                </Typography>
                                <Typography
                                    marginTop="5px"
                                    fontSize="15px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="300"
                                >
                                    Elige un nombre que informe de forma clara a
                                    los posibles miembros de qué trata el grupo.
                                    <br></br>
                                    ¡No dudes en ser creativo! Podrás cambiarlo
                                    más tarde si lo necesitas.
                                </Typography>
                                <TextField
                                    sx={{ width: '100%', marginTop: '1rem' }}
                                    label="Nombre del grupo"
                                    type="text"
                                    name="name_group"
                                    margin="dense"
                                    helperText={
                                        touched.name_group &&
                                        errors.name_group &&
                                        errors.name_group
                                    }
                                    size="small"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name_group}
                                />
                            </Stack>
                            <Stack marginBottom="15px">
                                <Typography
                                    fontSize="20px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    Ubicación
                                </Typography>
                                <Typography
                                    fontSize="15px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="300"
                                    marginTop="5px"
                                >
                                    Los grupos de bikelovers se reúnen
                                    localmente y en persona.
                                    <br></br>
                                    Te pondremos en contacto con gente de tu
                                    zona, y otros podrán unirse al grupo.
                                </Typography>
                                <TextField
                                    sx={{ width: '100%' }}
                                    label="Ubicacion"
                                    type="text"
                                    name="city"
                                    margin="dense"
                                    helperText={
                                        touched.city &&
                                        errors.city &&
                                        errors.city
                                    }
                                    size="small"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.city}
                                />
                            </Stack>
                            <Stack marginBottom="15px">
                                <Typography
                                    fontSize="20px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    Descripción
                                </Typography>
                                <Typography
                                    fontSize="15px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="300"
                                    marginTop="5px"
                                >
                                    Esto será lo que verá cualquier persona
                                    cuando ingrese a tu grupo, pero también
                                    podrás cambiarlo más tarde.
                                </Typography>
                                <TextField
                                    sx={{ width: '100%' }}
                                    multiline
                                    rows={5}
                                    label="Describe de qué trata tu grupo..."
                                    type="text"
                                    name="description"
                                    margin="dense"
                                    helperText={
                                        touched.description &&
                                        errors.description &&
                                        errors.description
                                    }
                                    size="small"
                                    inputProps={{ maxLength: 300 }}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                />
                                <Typography
                                    fontSize="12px"
                                    fontFamily="Inter"
                                    variant="h5"
                                    fontWeight="300"
                                    marginTop="5px"
                                >
                                    Quedan 101 caracteres
                                </Typography>
                            </Stack>
                            <Stack direction="row" gap="1rem">
                                <ButtonStyled type="submit">
                                    Crear Grupo
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
    )
}

export default NewGroups
