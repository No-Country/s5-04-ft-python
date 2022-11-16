import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Stack
            position="fixed"
            width="15%"
            height="100%"
            maxWidth="1440px"
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            px={{ xs: 3, sm: 5, md: 5 }}
            py="22px"
            zIndex={20}
            gap={1}
            left={0}
            sx={{ backgroundColor: '#F6F8F8' }}
        >
            <Link to="/">
                <Stack maxWidth="180px">
                    <img
                        src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668198608/Im%C3%A1genes%20UX%20UI/Logo/logo_hutjnv.svg"
                        alt="logo"
                        width="100%"
                    />
                </Stack>
            </Link>
            <Button
                variant="contained"
                component={Link}
                to="/login"
                sx={{
                    textTransform: 'none',
                    px: '30px',
                    display: { md: 'flex' },
                }}
                size="small"
            >
                Login
            </Button>
            <Link to="/">
                <Typography
                    color="secondary.main"
                    
                >
                    Inicio
                </Typography>
            </Link>
            <Link to="/">
                <Typography
                    color="secondary.main"
                    sx={{ textDecoration: 'none' }}
                >
                    Eventos
                </Typography>
            </Link>
            <Link to="/">
                <Typography
                    color="secondary.main"
                    sx={{ textDecoration: 'none' }}
                >
                    Grupos
                </Typography>
            </Link>
            <Link to="/">
                <Typography
                    color="secondary.main"
                    sx={{ textDecoration: 'none' }}
                >
                    Item 4
                </Typography>
            </Link>
        </Stack>
    )
}

export default Navbar
