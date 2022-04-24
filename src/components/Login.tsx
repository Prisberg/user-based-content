import { AppBar, Avatar, Box, Button, Drawer, Grid, IconButton, Paper, SxProps, TextField, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";





function Login(){
    

    return (
        <Box>
        <Grid>
            <Paper elevation={10} sx={paperStyle}>
                <Grid sx={text}>
                <Avatar sx={align}>
                </Avatar>
                SIGN IN
                </Grid>
                <TextField 
                label='Email' 
                placeholder='Enter email' 
                fullWidth 
                required
                sx={email}
                />
                <TextField 
                label='Password' 
                placeholder='Enter password' 
                fullWidth 
                required
                sx={password}
                />
                <Button 
                sx={button}
                type="submit" 
                color="primary"
                variant="contained" 
                fullWidth
                >
                Sign in
                </Button>
                <span style={{ marginTop: '2px' }}> 
                No account?
                <Link to={'/register'}>
                <Button sx={signUp}>
                    Sign up
                </Button>
                </Link>
                </span>
            </Paper>
        </Grid>
        </Box>
    );
}

const paperStyle: SxProps = {
    padding: '30px',
    height: '70vh',
    width: '300px',
    margin: '100px auto',
}

const align: SxProps = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem'
}
const text: SxProps = {
    fontSize: '20px',
    textAlign: 'center',
}
const email: SxProps = {
    marginTop: '3rem'
}
const password: SxProps = {
    marginTop: '3rem'
}
const button: SxProps = {
    marginTop: '5rem',
}
const signUp: SxProps = {
    marginTop: '2px'
}
const menu: SxProps = {
    backgroundColor: '#fff'
}
const icon: SxProps = {
    display: 'flex',
    
}
const iconStyle: SxProps = {
    fontSize: '3rem',
    color: 'black'
}

export default Login;

