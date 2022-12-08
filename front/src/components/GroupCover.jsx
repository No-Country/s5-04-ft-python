import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    styled,
    Typography,
} from '@mui/material'
import React from 'react'
import { Calendar, MapPin, User } from 'react-feather'
import { useAuth } from '../hooks/useAuth'

const ButtonStyledCancel = styled(Button)({
    backgroundColor: 'white',
    color: '#049AAA',
    border: '1px solid',
    width: 'auto',
    marginTop: '18px',
    '&:hover': {
        backgroundColor: '#049AAA',
        borderColor: '#049AAA',
        boxShadow: 'none',
        color: 'white',
    },
})
// Nombre, descripcion, id, user_id, eventos{
// Nombre, descripcion, imagen
// },
const GroupCover = () => {
    const { data } = useAuth()
    
    return (
        <Stack justifyContent={'center'} alignItems={'center'} width={'100%'}>
            <Stack width="50%" heigth="auto">
                <Card sx={{ maxWidth: '100%' }}>
                    <CardContent>
                        <CardMedia
                            margin={'1rem'}
                            component="img"
                            height="140"
                            image="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668611503/Im%C3%A1genes%20UX%20UI/Default/group_vqxte2.png"
                            alt="green iguana"
                        />
                        <CardActions
                            sx={{
                                justifyContent: 'space-between',
                                alignItems: 'end',
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                <b> {group.name} </b>
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: 'none',
                                    px: '30px',
                                    display: { md: 'flex' },
                                }}
                                size="small"
                            >
                                {' '}
                                Editar{' '}
                            </Button>
                            <ButtonStyledCancel size="small">
                                <Calendar /> Crear Evento
                            </ButtonStyledCancel>
                        </CardActions>
                        <Typography variant="body2" color="text.secondary">
                            <MapPin /> Recoleta, Buenos Aires
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <User /> Administrado por: {data?.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>
    )
}

export default GroupCover
