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
import { useAuth } from '../hooks/useAuth'
import { useGroup } from '../hooks/useGroup'


const CardGroups = ({ item }) => {
    const { data } = useAuth()
    // const { grupos } = useGroup()
   
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
            {/* {grupos.map((grupo, index) => ( */}
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
                    // src={grupo.image}
                    src={item.img}
                    // alt={grupo.name_group}
                    alt={item.groupName}
                />
                <CardContent>
                    <Typography
                        fontSize="20px"
                        fontFamily="Inter"
                        variant="h5"
                        fontWeight="600"
                    >
                        {/* {grupo.name_group} */}
                        {item.groupName}
                    </Typography>
                    <Typography marginY="8px" fontSize="16px">
                        {/* {grupo.city} */}
                        {item.place}
                    </Typography>
                    <Typography fontSize="16px">{item.members}</Typography>
                </CardContent>
                <CardActions>
                    {data?.username ? (
                        <ButtonStyled variant="contained">
                            Unirme al Grupo
                        </ButtonStyled>
                    ) : (
                        ''
                    )}
                </CardActions>
            </Card>
            {/* ))} */}
        </Stack>
    )
}

export default CardGroups
