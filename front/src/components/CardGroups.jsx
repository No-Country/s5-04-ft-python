import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material'
const CardGroups = ({ item }) => {
    const ButtonStyled = styled(Button)({
        backgroundColor: '#F51D38',
        color: 'white',
        width: '100%',
        '&:hover': {
            backgroundColor: '#ff001e',
            borderColor: '#ff001e',
            boxShadow: 'none',
        },
    })

    return (
        <Stack>
            <Card
                sx={{
                    border: '1px solid',
                    borderColor: '#bbb8b8',
                    padding: '5px',
                }}
            >
                <CardMedia
                    height="200"
                    component="img"
                    sx={{
                        padding: '1rem',
                        borderRadius: '20px',
                        objectFit: 'contain',
                    }}
                    src={item.img}
                    alt={item.groupName}
                />
                <CardContent>
                    <Typography
                        fontSize="20px"
                        fontFamily="Inter"
                        variant="h5"
                        fontWeight="600"
                    >
                        {item.groupName}
                    </Typography>
                    <Typography marginY="8px" fontSize="16px">
                        {item.place}
                    </Typography>
                    <Typography fontSize="16px">{item.members}</Typography>
                </CardContent>
                <CardActions>
                    <ButtonStyled variant="contained">
                        Unirme al Grupo
                    </ButtonStyled>
                </CardActions>
            </Card>
        </Stack>
    )
}

export default CardGroups
