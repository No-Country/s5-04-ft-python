import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import RouteAlert from '../components/RouteAlert'
import RoutesContainer from '../components/RoutesContainer'
import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
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
                            to="/newGroup"
                            sx={{ border: '1px solid red' }}
                        >
                            + Crear Nuevo Grupo
                        </Button>
                    ) : (
                        <RouteAlert />
                    )}
                </Stack>
                <Box>
                    <RoutesContainer />
                </Box>
                <Typography
                    marginTop="2rem"
                    fontSize="24px"
                    fontFamily="Sora"
                    variant="h5"
                    fontWeight="600"
                >
                    Actividad
                </Typography>
                <Stack alignItems="center" marginY="4rem">
                    <img
                        style={{ height: '200px', width: '200px' }}
                        src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1669736339/Im%C3%A1genes%20UX%20UI/Default/empty_fbhlvk.png"
                        alt="activity"
                    />
                    <Typography
                        fontSize="20px"
                        fontFamily="Sora"
                        variant="h5"
                        fontWeight="600"
                    >
                        Aun no hay actividad
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <Typography>Tu proximo evento</Typography>
                <Stack>
                    <Typography>
                        No te has registrado en ningun evento!
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
        /* <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="baseline"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingRight="24px"
                    paddingLeft="22px"
                >
                    <Typography
                        fontSize="24px"
                        fontFamily="Sora"
                        variant="h5"
                        fontWeight="600"
                    >
                        Rutas
                    </Typography>
                </Stack>
                <Stack>
                    <h1>rutas</h1>
                </Stack>
                <Stack direction="row" gap="2rem" alignItems="flex-start">
                    <Button
                        component={Link}
                        to="/newGroup"
                        sx={{ border: '1px solid red' }}
                    >
                        + Crear Nuevo Grupo
                    </Button>
                    <Stack marginRight="8.4rem">
                        <Typography
                            fontSize="22px"
                            fontFamily="Sora"
                            variant="h5"
                            fontWeight="600"
                        >
                            Tu proximo evento!
                        </Typography>
                        <Typography>Tu proximo evento!</Typography>
                        <Typography>Tu proximo evento!</Typography>
                        <Typography>Tu proximo evento!</Typography>
                    </Stack>
                </Stack>
            </Stack> */
    )
}

export default HomePage
