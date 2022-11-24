import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const CardGroups = ({ item }) => {
    console.log(item)
    return (
        <Stack>
            <Typography>{item.groupName}</Typography>
            <Typography>{item.place}</Typography>
            <Typography>{item.members}</Typography>
        </Stack>
    )
}

export default CardGroups
