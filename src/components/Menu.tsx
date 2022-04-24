import { AppBar, Avatar, Box, Button, Drawer, Grid, IconButton, Paper, SxProps, TextField, Toolbar, Typography } from "@mui/material";
import { borderRadius, height, styled, textAlign, useTheme, width } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import React from "react";
import CloseIcon from '@mui/icons-material/Close';


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
            Sign in
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
            >
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
                marginTop: '4rem',
                marginRight: '1rem',
                width: { xs: drawerWidth, sm: '60%', md: '40%', lg: '20%' },
                height: { xs: drawerHeight, sm: '60%', md: '40%', lg: '15%' },
                backgroundColor: '#C4C4C4',
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
        <Button type="submit" sx={button}>Log in</Button>
        </Drawer>
        </Box>
    );
}
const button: SxProps = {
    color: 'black',
    backgroundColor: '#fff',
    width: '10rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '10px'

}
const iconStyle: SxProps = {
    fontSize: '2rem',
    color: 'black'
}

export default Menu;