import {
    Avatar,
    Box,
    Button,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const UserMenu = () => {
    const { isLogged, setIsLogged, username } = useAuth()

    const [menuItems, setMenuItems] = useState(['Profile', 'Logout'])
    const navigate = useNavigate()
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    // useEffect(() => {
    //     userInfo.isAdmin
    //         ? setMenuItems(['Profile', 'Admin Dashboard', 'Logout'])
    //         : setMenuItems(['Profile', 'Logout'])
    // }, [userInfo.isAdmin])

    const handleClick = (setting) => {
        switch (setting) {
            case 'Profile':
                // navigate('/profile')
                break
            case 'Admin Dashboard':
                navigate('/admin')
                break
            case 'Logout':
                setIsLogged(false)
                // dispatch(logout())
                navigate('/')

                break

            default:
                break
        }
        setAnchorElUser(null)
    }
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open menu">
                <Button
                    onClick={handleOpenUserMenu}
                    // startIcon={<IoMdArrowDropdown color="black" />}
                    sx={{ p: 0, px: 1 }}
                >
                    <Avatar alt={username}>
                        {username.charAt(0).toUpperCase()}
                    </Avatar>
                </Button>
            </Tooltip>
            <Typography>{username.toUpperCase()}</Typography>
            <Typography sx={{ color: '#565A5C' }}>@{username}</Typography>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item} onClick={() => handleClick(item)}>
                        <Typography textAlign="center">{item}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default UserMenu
