import { Stack, Typography, TextField, Button, styled } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const ButtonStyled = styled(Button)({
    backgroundColor: '#F51D38',
    color: 'white',
    width: '100%',
    marginTop: '18px',
    '&:hover': {
        backgroundColor: '#ff001e',
        borderColor: '#ff001e',
        boxShadow: 'none',
    },
})

const NewGroups = () => {
    const clientSchema = Yup.object().shape({
        nameGroup: Yup.string().min(
            3,
            'El nombre de usuario es demasiado corto'
        ),
    })

    const initialValues = {
        nameGroup: '',
        location: '',
        description: '',
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
                >
                    {({
                        handleSubmit,
                        errors,
                        touched,
                        values,
                        handleChange,
                        handleBlur,
                    }) => (
                        <Form>
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
                                    name="nameGroup"
                                    margin="dense"
                                    helperText={
                                        touched.nameGroup &&
                                        errors.nameGroup &&
                                        errors.nameGroup
                                    }
                                    size="small"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nameGroup}
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
                                    name="location"
                                    margin="dense"
                                    helperText={
                                        touched.location &&
                                        errors.location &&
                                        errors.location
                                    }
                                    size="small"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.location}
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
                            <ButtonStyled>Crear Grupo</ButtonStyled>
                        </Form>
                    )}
                </Formik>
            </Stack>
        </Stack>
    )
}

export default NewGroups
