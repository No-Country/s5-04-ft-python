import {
    Box,
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
const RoutesCard = ({ item }) => {
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

    //El color de la dificultad va a ir cambiando a medida de cual sea la misma

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
                        (icon lugar) {item.place}
                    </Typography>

                    <Stack direction="row" gap="10px">
                        <Box
                            sx={{
                                backgroundColor: 'red',
                                color: 'white',
                                padding: '0px',
                                borderRadius: '15px',
                            }}
                        >
                            <Typography
                                fontSize="14px"
                                fontWeight="600"
                                letterSpacing="0.6px"
                                padding="5px"
                            >
                                {item?.difficulty}Intermedio
                            </Typography>
                        </Box>
                        <Typography>
                            {item?.distance}(icon carrera)20km
                        </Typography>
                        <Typography>
                            {item?.timeTravel}(icon tiempo)01:45
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    )
}
export default RoutesCard
