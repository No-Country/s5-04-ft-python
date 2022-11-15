import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="space-between"
            mt={3}
            direction="row"
        >
            <Stack>
                <Typography
                    fontSize="50px"
                    variant="h1"
                    justifyContent="center"
                    alignItems="center"
                >
                    Login
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
            </Stack>
        </Stack>
    )
}

export default Login
