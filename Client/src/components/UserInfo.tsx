import { Avatar, Box, Button, Container, Drawer, Grid, IconButton, Paper, SxProps, TextField, Tooltip, Typography, } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useState } from "react";
import React from "react";
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from "@mui/system";
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


const UserInfo: React.FC<Props> = () => {

    
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
        <Container>
            <Box>
                <Box sx={profile}>
                <Typography sx={profileText}>
                    User Profile
                </Typography>
                <Avatar />
                </Box>
                <Tooltip 
                title="Edit"
                sx={edit}
                >
                <Button onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: '' }) }}>
                <EditIcon 
                sx={editIcon}/>
                </Button>
                </Tooltip>

                <Drawer
                sx={{
                position: 'absolute',
                flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    marginTop: '10rem',
                    marginRight: '20rem',
                    width: { xs: drawerWidth, sm: '35%', md: '25%', lg: '50%' },
                    height: { xs: drawerWidth, sm: '40%', md: '40%', lg: '40%' },
                    backgroundColor: '#fff',
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


                
                <TextField>

                </TextField>



                </Drawer>



                <Button>
                <PersonRemoveIcon sx={deleteIcon}/>
                </Button>

                <Box>
                <Typography sx={userText}>User Info</Typography>
                <Paper sx={userInfo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores ducimus quisquam? Doloribus tenetur, ipsum cum molestias omnis dolorum, illum eligendi odio facere assumenda et repellendus officiis repellat, cumque est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores ducimus quisquam? Doloribus tenetur, ipsum cum molestias omnis dolorum, illum eligendi odio facere assumenda et repellendus officiis repellat, cumque est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores ducimus quisquam? Doloribus tenetur, ipsum cum molestias omnis dolorum, illum eligendi odio facere assumenda et repellendus officiis repellat, cumque est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores ducimus quisquam? Doloribus tenetur, ipsum cum molestias omnis dolorum, illum eligendi odio facere assumenda et repellendus officiis repellat, cumque est!
                </Paper>
                </Box>

                <Box>
                    <Typography sx={text}>Newest Post</Typography>
                    <Paper sx={newPost}>
                    <Typography >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quis eligendi sit numquam odit corporis, quasi, veniam quibusdam harum laborum rerum nisi asperiores unde hic! Alias atque tempore cumque id!
                    </Typography>
                    </Paper>
                </Box>
                <Box sx={buttonAlign}>
                <Button sx={button}>All Posts</Button>
                </Box>

            </Box>
        </Container>
    );
}

const edit: SxProps = {
    
}
const userInfo: SxProps = {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '30rem',
}
const textfield: SxProps = {
    marginTop: '3rem',
    width: '100%',
}
const newPost: SxProps = {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '15rem',
    marginBottom: '1rem'
}
const text: SxProps = {
    marginTop: '3rem',
    fontSize: '2rem'
}
const userText: SxProps = {
    marginTop: '3rem',
    fontSize: '2rem'
}
const profile: SxProps = {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'row',
}
const profileText: SxProps = {
    fontSize: '2rem',
    marginRight: '1rem'
}
const editIcon: SxProps = {
    cursor: 'pointer',
    marginTop: '1rem',
    marginRight: '1rem',
    fontSize: '2rem',
    color: 'blue'
}
const deleteIcon: SxProps = {
    marginTop: '1rem',
    fontSize: '2rem',
    color: 'red'
}
const buttonAlign: SxProps = {
    display: 'flex',
    justifyContent: 'flex-end'
}
const button: SxProps = {
    backgroundColor: '#A1BFED',
    fontSize: '2rem',
    color: 'black', 
    width: '15rem',
    height: '6rem',
    marginBottom: '2rem'
}
const iconStyle: SxProps = {
    fontSize: '2rem',
    color: 'black'
}




export default UserInfo;