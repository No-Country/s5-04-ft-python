import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import RoutesContainer from '../components/RoutesContainer'
import { useAuth } from '../hooks/useAuth'
import RouteAlert from '../components/RouteAlert'

const Rutas = () => {
    const { data } = useAuth()
    return (
        <Grid
            display="grid"
            gridTemplateColumns="4fr 1fr"
            marginLeft="17rem"
            gap="2rem"
        >
            <Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        fontSize="24px"
                        fontFamily="Sora"
                        variant="h5"
                        fontWeight="600"
                    >
                        Rutas
                    </Typography>
                    {data?.username ? (
                        <Button
                            component={Link}
                            to="/newRoute"
                            sx={{ border: '1px solid red' }}
                        >
                            + Crear Nueva Ruta
                        </Button>
                    ) : (
                        <RouteAlert />
                    )}
                </Stack>
                <Box>
                    <RoutesContainer />
                </Box>
            </Stack>
        </Grid>
    )
}

export default Rutas
