import { Avatar, Box, Button, Container, Drawer, Grid, IconButton, Paper, SxProps, TextField, Tooltip, Typography, } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useContext, useEffect, useRef, useState } from "react";
import { styled } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { APIContext } from "../Context/AuthContext";
import React from "react";
import axios, { AxiosResponse } from "axios";
import BadGate from "./BadGate";

function UserInfo() {
    const [open, setOpen] = React.useState(false);
    const [openEditPost, setOpenEditPost] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [userPosts, setUserPosts] = useState([]);
    const [description, setDescription] = useState<string>("")
    const [selectedPost, setSelectedPost] = useState()
    const [postValue, setPostValue] = useState('')
    const [userBio, setUserBio] = useState()
  


    const ctx = useContext(APIContext);
    /*     console.log(ctx?.id); */

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleEditDrawerOpen = () => {
        setOpenEditPost(true);
    };
    const handleEditDrawerClose = () => {
        setOpenEditPost(false);
    };
    const handleDeleteDrawerOpen = () => {
        setOpenDelete(true);
    };
    const handleDeleteDrawerClose = () => {
        setOpenDelete(false);
    };

    let drawerWidth
    if (!open || !openEditPost || !openDelete) {
        drawerWidth = '0%'
    } else {
        drawerWidth = '100%'
    }
    let drawerHeight
    if (!open || !openEditPost|| !openDelete) {
        drawerHeight = '0%'
    } else {
        drawerHeight = '100%'
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(`http://localhost:4000/posts/profile/${ctx?.id}`);
                setUserPosts(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [ctx?.id]);
    console.log(ctx);

    async function editPost() {
        
        await axios.put("http://localhost:4000/posts/" + selectedPost, {
            userId: ctx?.id,
            description
          }, {
            withCredentials: true
          }).then((res: AxiosResponse) => {
              window.location.reload();
              console.log('suc');
          }, () => {
            console.log("Failure");
          })
      }
    async function editUser() {
        
        await axios.put("http://localhost:4000/user/" + ctx?.id, {
            userId: ctx?.id,
            bio: userBio
          }, {
            withCredentials: true
          }).then((res: AxiosResponse) => {
              window.location.reload();
              console.log('suc');
          }, () => {
            console.log("Failure");
          })
      }
      async function deletePost() {
        await axios.delete("http://localhost:4000/posts/" + selectedPost, { data: { userId: ctx?.id } },).then((res: AxiosResponse) => {
              window.location.reload();
              console.log('suc');
          }, () => {
            console.log("Failure");
          })
      }
      async function deleteUser() {
        await axios.delete("http://localhost:4000/user/" + ctx?.id, 
        { data: { 
            userId: ctx?.id 
        } },).then((res: AxiosResponse) => {
            window.location.href = "/"
            console.log('suc');
          }, () => {
            console.log("Failure");
          })
      }
      const textInput = React.useRef(null);

      const submitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newPost = {
            userId: ctx?.id,
            userName: ctx?.username,
            description,
        };
        try {
          await axios.post("http://localhost:4000/posts", newPost);
          window.location.reload();
        } catch (err) {
            console.log("Failure")
        }
      };
      const logout = () => {
        axios.get("http://localhost:4000/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "success") {
                window.location.href = "/";
            }
        })
    }
    const handleChange = (e: { target: { value: any; id: string; }; }) => {
        //User info textfield
        if (e.target.id === 'bio') {
            setUserBio(e.target.value);
            
            //Create post textfield
        } else {
            setPostValue(e.target.value);
        }
    };
    
    return (
        ctx ?
            <Container>
                <Box sx={profile}>

                <Typography sx={profileText}>
                {ctx?.username}
                <br/>
                {ctx?.bio}
                </Typography>
                <Avatar />
                </Box>
                <Tooltip 
                title="Edit"
                // sx={edit}
                >
                <Button onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: '' }) }}>
                <EditIcon 
                sx={editIconStyle}
                />
                <Typography>Edit</Typography>
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

                    <Typography sx={profileText}>
                        {ctx?.username}
                    </Typography>
                    <Avatar />
                </Drawer>
                <Button>
                    <PersonRemoveIcon
                        onClick={handleDrawerOpen}
                        sx={removeIconStyle} />
                        <Typography>Delete</Typography>
                </Button>
                
                <Drawer
                    sx={drawerStyle}
                    variant="persistent"
                    anchor="right"
                    open={open}>
                    <DrawerHeader >
                        <IconButton onClick={handleDrawerClose}>
                            <CloseIcon sx={iconStyle} />
                        </IconButton>
                        <Typography sx={editText}>Are you sure you want to delete this account?</Typography>
                    </DrawerHeader>
                    <Button
                        type="button"
                        sx={confirmBtn}
                        onClick={() => { handleDrawerClose(); }}>
                        No
                    </Button>
                    <Button
                        type="button"
                        sx={confirmBtn}
                        onClick={() => { 
                            deleteUser();
                            logout(); 
                            }}>
                        Yes
                    </Button>
                </Drawer>
                <Box
                    component='form'
                    >
                    <Typography sx={userText}>Your bio</Typography>
                    <TextField
                        id="bio"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        value={userBio}
                        onChange={handleChange}
                        />
                    <Button
                        onClick={editUser}
                        type='submit'
                        sx={button}
                        >
                        Update Bio
                    </Button>
                </Box>
                <Box
                    component='form'
                    sx={postBox}>
                    <Typography sx={userText}>Create Post</Typography>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        value={description}
                        inputRef={textInput}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <Button
                        onClick={submitHandler}
                        type='submit'
                        sx={button}>
                         Post
                    </Button>
                </Box>
                <Box >
            {userPosts.map((post: any) => (
                <Box  key={post?._id} >
                    <Paper elevation={3} >
                        <Box >
                            <Typography variant="h5">{post?.description}</Typography>
                            <Typography></Typography>
                            <Button onClick={() => {
                            handleEditDrawerOpen()
                            setSelectedPost(post?._id)
                            }}
                            sx={{ ...(openEditPost && { display: '' }) }}>

                            <EditIcon 
                            //sx={edit}deletePost
                            />
                            </Button>
                            <Button onClick={() => {
                            setSelectedPost(post?._id)
                            handleDeleteDrawerOpen()
                            }}sx={{ float: 'right', color: 'red' }}>
                            <DeleteForeverIcon/>
                            </Button>
                            </Box>
                    </Paper>
                    <Drawer
                    sx={drawerStyle}
                    variant="persistent"
                    anchor="right"
                    open={openDelete}>
                    <DrawerHeader >
                        <IconButton onClick={handleDeleteDrawerClose}>
                            <CloseIcon sx={iconStyle} />
                        </IconButton>
                        <Typography sx={editText}>Are you sure you want to delete this post?</Typography>
                    </DrawerHeader>
                    <Button
                        type="button"
                        sx={confirmBtn}
                        onClick={() => { 
                            handleDeleteDrawerClose();
                         }}>
                        No
                    </Button>
                    <Button
                        type="button"
                        sx={confirmBtn}
                        onClick={() => 
                        {
                            deletePost();
                            handleDeleteDrawerClose();
                        }
                        }>
                        Yes
                    </Button>
                </Drawer>
                    </Box>
                
            ))}
        </Box>
        <Drawer
                    sx={{
                        position: 'absolute',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            marginTop: '10rem',
                            marginRight: { sm: '8rem', lg: '20rem' },
                            width: { xs: '100%', sm: '50%', md: '50%', lg: '50%' },
                            height: { xs: '50%', sm: '40%', md: '40%', lg: '40%' },
                            backgroundColor: '#ECECEC',
                            borderRadius: '20px'
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={openEditPost}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleEditDrawerClose}>
                            <CloseIcon sx={iconStyle} />
                        </IconButton>
                        <Typography sx={editText}>Edit post</Typography>
                    </DrawerHeader>

                    <TextField  
                    required
                    fullWidth
                    multiline
                    rows={4}
                    type="text"
                    value={description}
                    // d
                    onChange={e => setDescription(e.target.value)}
                    >

                    </TextField>
                    <Button onClick={editPost} sx={confirmBtn}>Confirm</Button>

                </Drawer>
        </Container>
            : <BadGate />
    );
}

const removeIconStyle: SxProps = {
    fontSize: '3rem',
    marginTop: '1rem',
    paddingRight: '1rem',
    color: 'red'
}
const editIconStyle: SxProps = {
    fontSize: '3rem',
    marginTop: '1rem',
    paddingRight: '1rem',
    color: 'blue'
}
const drawerStyle: SxProps = {
    position: 'absolute',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        marginTop: '10rem',
        marginRight: { xs: '1.5rem', sm: '8rem', lg: '20rem' },
        width: { xs: '90%', sm: '50%', md: '50%', lg: '50%' },
        height: { xs: '50%', sm: '50%', md: '40%', lg: '40%' },
        backgroundColor: '#ECECEC',
        borderRadius: '20px'
    }
}
const confirmBtn: SxProps = {
    backgroundColor: '#A1BFED',
    color: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
    width: '5rem'
}

const editText: SxProps = {
    fontSize: '2rem',
    marginTop: '1.5rem',
    marginLeft: '2rem',
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
const button: SxProps = {
    backgroundColor: '#A1BFED',
    fontSize: '1rem',
    color: 'black',
    width: '10rem',
    height: '3rem',
    marginBottom: '2rem',
    float: 'right'
}
const iconStyle: SxProps = {
    marginTop: '1.5rem',
    fontSize: '2rem',
    color: 'black'
}
const postBox: SxProps = {
    marginBottom: '5rem'
}
const postStyle: SxProps = {
    marginTop: '2.5rem',
    minHeight: '8rem',
    height: 'auto',
    backgroundColor: '#FAFAFA',
    marginBottom: '2rem'
}
const postText: SxProps = {
    paddingTop: '1.5rem',
    marginLeft: '1rem',
    wordBreak: 'break-all',
    paddingBottom: '1.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
}
const btnGroup: SxProps = {
    marginTop: '-2rem'
    
}
const userStyle: SxProps = {
    backgroundColor: '#bdbdbd',
    marginTop: '5rem',
    width: '10rem',
    height: '2.5rem',
    paddingLeft: '1rem',
}
const editTextStyle: SxProps = {
    marginTop: '2rem'
}
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
}));



export default UserInfo;