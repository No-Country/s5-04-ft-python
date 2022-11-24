import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import ContainerGroups from '../components/ContainerGroups'

const Grupos = () => {
    return (
        <Stack marginLeft="16rem">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                paddingRight="24px"
            >
                <Typography>Grupos Sugeridos</Typography>
                <Button>+ Crear Nuevo Grupo</Button>
            </Stack>
            <Box width="100%">
                <ContainerGroups />
            </Box>
        </Stack>
    )
}

export default Grupos
