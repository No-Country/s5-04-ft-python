import { Avatar, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from './UserMenu'

const Navbar = () => {
    const { isLogged, username } = useAuth()

    return (
        <Stack
            position="fixed"
            width="200px"
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
            {!isLogged ? (
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
            ) : (
                <UserMenu/>
                // <Stack>
                //     <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
                //     <Typography>
                //         {username}
                //     </Typography>
                //     <Typography sx={{ color: '#565A5C' }}>
                //         @{username}
                //     </Typography>
                // </Stack>
            )}

            <Link to="/">
                <Typography color="secondary.main">Inicio</Typography>
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
                    Menu Item 4
                </Typography>
            </Link>
            <Link to="/">
                <Typography
                    color="secondary.main"
                    sx={{ textDecoration: 'none' }}
                >
                    Menu Item 5
                </Typography>
            </Link>
        </Stack>
    )
}

export default Navbar
