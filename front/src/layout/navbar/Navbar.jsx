import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Stack
            position="fixed"
            width="100%"
            maxWidth="1440px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            px={{ xs: 3, sm: 5, md: 5 }}
            py="22px"
            zIndex={20}
            gap={1}
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
            <Link to="/">
                <Typography>
                  Item 1
                </Typography>
            </Link>
            <Link to="/">
                <Typography>
                  Item 2
                </Typography>
            </Link>
            <Link to="/">
                <Typography>
                  Item 3
                </Typography>
            </Link>
            <Link to="/">
                <Typography>
                  Item 4
                </Typography>
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
        </Stack>
    )
}

export default Navbar
