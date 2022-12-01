import { Stack, Typography, Button, TextField, styled } from '@mui/material'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'


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

    const clientSchema = Yup.object().shape({
        nameRoute: Yup.string().min(
            3,
            'El nombre de usuario es demasiado corto'
        ).required('* El nombre de la ruta es requerido'),
        location: Yup.string().required('* La ubicación de la ruta es requerida'),
        description: Yup.string().required('* La descripción es requerida'),
    })

    const initialValues = {
        nameRoute: '',
        location: '',
        description: '',
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
                                      Nombre
                                  </Typography>
                                  <Typography
                                      marginTop="5px"
                                      fontSize="15px"
                                      fontFamily="Inter"
                                      variant="h5"
                                      fontWeight="300"
                                  >
                                      Elige un nombre que informe de forma clara
                                      el camino de esta ruta.
                                  </Typography>
                                  <TextField
                                      sx={{ width: '100%', marginTop: '1rem' }}
                                      label="Nombre de la ruta"
                                      type="text"
                                      name="nameRoute"
                                      margin="dense"
                                      error={
                                          touched.nameRoute && errors.nameRoute
                                      }
                                      helperText={
                                          touched.nameRoute &&
                                          errors.nameRoute &&
                                          errors.nameRoute
                                      }
                                      size="small"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.nameRoute}
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
                                      Las rutas de bikelovers se reúnen
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
                                      error={
                                          touched.location && errors.location
                                      }
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
                                      cuando ingrese a tu ruta.
                                  </Typography>
                                  <TextField
                                      sx={{ width: '100%' }}
                                      multiline
                                      minRows={5}
                                      maxRows={8}
                                      label="Describe de qué trata tu ruta..."
                                      type="text"
                                      name="description"
                                      margin="dense"
                                      error={
                                          touched.description &&
                                          errors.description
                                      }
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
                                  <ButtonStyled>Crear Ruta</ButtonStyled>
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