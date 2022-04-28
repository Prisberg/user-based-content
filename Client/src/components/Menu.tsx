import { AppBar, Avatar, Box, Button, Drawer, IconButton, SxProps, Toolbar, Typography } from "@mui/material";
import { styled, } from "@mui/system";
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React, { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
import Axios, { AxiosResponse } from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import { APIContext } from '../Context/AuthContext'


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
}));


const Menu: React.FC = () => {
    const ctx = useContext(APIContext);
    const logout = () => {
        Axios.get("http://localhost:4000/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "success") {
                window.location.href = "/";
            }
        })
    }
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    let drawerWidth
    if (!open) {
        drawerWidth = '0%'
    } else {
        drawerWidth = '100%'
    }
    let drawerHeight
    if (!open) {
        drawerHeight = '0%'
    } else {
        drawerHeight = '100%'
    }

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <Button
                                    type="submit"
                                    sx={home}
                                // sx={{ mt: 3, mb: 2 }}
                                >
                                    POST
                                </Button>
                            </Link>
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }}>
                            <Avatar />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                sx={{
                    position: 'absolute',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        marginTop: '5rem',

                        width: { xs: drawerWidth, sm: '35%', md: '25%', lg: '18%' },
                        height: { xs: drawerWidth, sm: '50%', md: '50%', lg: '50%' },
                        backgroundColor: '#E5E5E5',
                        borderRadius: '20px'

                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon sx={iconStyle} />
                    </IconButton>
                </DrawerHeader>
                <div>
                    <Box >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button onClick={handleDrawerClose} type="submit" variant='text' sx={homeButton}> <HomeIcon sx={loginIcon} />Home</Button>
                        </Link>
                    </Box>
                    {ctx ? (
                        <>
                            <Box >
                                <Link onClick={logout} to="/logout" style={{ textDecoration: 'none' }}>
                                    <Button onClick={handleDrawerClose} type="submit" variant='text' sx={homeButton}> <LogoutIcon sx={loginIcon} />Logout</Button>
                                </Link>
                            </Box>
                            <Box >
                                <Link to={'/user'} style={{ textDecoration: 'none' }}>
                                    <Button onClick={handleDrawerClose} type="submit" variant='text' sx={button}> <PersonIcon sx={loginIcon} />User</Button>
                                </Link>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box >
                                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                                    <Button onClick={handleDrawerClose} type="submit" variant='text' sx={button}> <LoginIcon sx={loginIcon} /> Log in</Button>
                                </Link>
                            </Box>
                            <Box sx={button}>
                                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                                    <Button onClick={handleDrawerClose} type="submit" variant='text' sx={button}> <AssignmentIndIcon sx={loginIcon} />Register</Button>
                                </Link>
                            </Box>
                        </>
                    )}
                </div>
            </Drawer>
        </Box>
    );
}

const button: SxProps = {
    fontSize: '1.5rem'
}
const homeButton: SxProps = {
    marginTop: '1rem',
    fontSize: '1.5rem'
}
const home: SxProps = {
    fontSize: '2rem'
}
const iconStyle: SxProps = {
    fontSize: '2rem',
    color: 'black'
}
const loginIcon: SxProps = {
    fontSize: '2rem',
    marginRight: '2rem'
}

export default Menu;