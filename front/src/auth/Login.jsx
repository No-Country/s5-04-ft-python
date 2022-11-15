import { Stack, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="space-between"
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
                <Button component={Link} to="/register">
                    Register
                </Button>
            </Stack>
        </Stack>
    )
}

export default Login
