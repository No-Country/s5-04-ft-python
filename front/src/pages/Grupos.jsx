import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ContainerGroups from '../components/ContainerGroups'
import { Link } from 'react-router-dom'

const Grupos = () => {
    return (
        <Stack marginLeft="16rem">
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
                    Grupos Sugeridos
                </Typography>
                <Button
                    component={Link}
                    to="/newGroup"
                    sx={{ border: '1px solid red' }}
                >
                    + Crear Nuevo Grupo
                </Button>
            </Stack>
            <Box width="100%">
                <ContainerGroups />
            </Box>
        </Stack>
    )
}

export default Grupos
