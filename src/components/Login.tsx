import { Avatar, Button, Grid, Paper, SxProps, TextField } from "@mui/material";
import { textAlign, width } from "@mui/system";
import React from "react";



function Login() {
    return (
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
                <Button sx={signUp}>
                    Sign up
                </Button>
                </span>
            </Paper>
        </Grid>
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

export default Login;

