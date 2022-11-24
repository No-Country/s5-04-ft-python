import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { Button, Stack, TextField } from '@mui/material'
import { Home, LogOut, Map, Settings, Users } from 'react-feather'
import HomePage from '../../pages/HomePage'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import UserMenu from './UserMenu'

const drawerWidth = 240

function ResponsiveDrawer(props) {
    const { window } = props
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const { isLogged, username } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <div>
            <Link to={'/'}>
                <img
                    src="https://res.cloudinary.com/dzxsorvsv/image/upload/v1668198608/Im%C3%A1genes%20UX%20UI/Logo/logo_hutjnv.svg"
                    alt="BikeLoversLogo"
                />
            </Link>

            {/* <Toolbar /> */}
            <Stack width={'100%'} padding="1rem">
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
                        Iniciar Sesión
                    </Button>
                ) : (
                    <UserMenu />
                )}
            </Stack>

            <Divider />
            <List>
                {/* INICIO */}
                <Link to={'/'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Home color="#000" />
                            </ListItemIcon>
                            <ListItemText>Inicio</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>

                {/* GRUPOS */}
                <Link to={'/grupos'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Users color="#000" />
                            </ListItemIcon>
                            <ListItemText>Grupos</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>

                {/* RUTAS */}
                <Link to={'/rutas'}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Map color="#000" />
                            </ListItemIcon>
                            <ListItemText>Rutas</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {/* CONFIGURACIÓN */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings color="#000" />
                        </ListItemIcon>
                        <ListItemText> Configuración </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            
            {isLogged && <List>
                {/* CERRAR SESIÓN */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogOut color="#000" />
                        </ListItemIcon>
                        <ListItemText> Cerrar Sesión </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>}
        </div>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ bgcolor: '#fff', color: '#000' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        width="100%"
                        justifyContent={'center'}
                        alignItems={'end'}
                    >
                        {/* Agregar Icono de Busqueda (Lupa) */}

                        <TextField
                            id="outlined-basic"
                            placeholder={`Buscar en BikeLovers...`}
                            variant="outlined"
                            size="small"
                        />
                    </Stack>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {/* <HomePage /> */}
            </Box>
        </Box>
    )
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}

export default ResponsiveDrawer
