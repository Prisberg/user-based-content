import { AppBar, Avatar, Box, Button, Drawer, Grid, IconButton, Paper, SxProps, TextField, Toolbar, Typography } from "@mui/material";
import { borderRadius, height, styled, textAlign, useTheme, width } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
interface Props {

}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    
    justifyContent: 'flex-start',
}));


const Menu: React.FC<Props> = () => {

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
                    Home
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
                    <Avatar/>
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
                
                width: '18%',
                height: '40%',
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
        <Box >
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Button type="submit" variant='text'  sx={button}> <HomeIcon sx={loginIcon} /> Home</Button>
        </Link>
        </Box>
        <br />
        <Box >
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
        <Button type="submit" variant='text'  sx={button}> <LoginIcon sx={loginIcon} /> Log in</Button>
        </Link>
        </Box>
        <br />
        <Box sx={button}>
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
        <Button type="submit" variant='text'  sx={button}> <AssignmentIndIcon sx={loginIcon} />Register</Button>
        </Link>
        </Box>
        </Drawer>
        </Box>
    );
}
const button: SxProps = {
    fontSize:'1.5rem'
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