import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ContainerGroups from '../components/ContainerGroups'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import GroupAlert from '../components/GroupAlert'

const Grupos = () => {
    const { data } = useAuth()

    return (
        <Stack marginLeft="16rem">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                paddingRight="24px"
            >
                <Typography
                    fontSize="24px"
                    fontFamily="Sora"
                    variant="h5"
                    fontWeight="600"
                >
                    Grupos Sugeridos
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
                    <GroupAlert />
                )}
            </Stack>
            <Box width="100%">
                <ContainerGroups />
            </Box>
        </Stack>
    )
}

export default Grupos
