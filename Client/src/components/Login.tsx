import { Avatar, Box, Button, Container, FormControl, Grid, SxProps, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

import axios, { AxiosResponse } from "axios";


export default function Login() {
 
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const login = async () => {
  await axios.post("http://localhost:4000/login", {
    email,
    password
  }, {
    withCredentials: true
  }).then((res : AxiosResponse) => {
    if (res.data === "success") {
     console.log("success");
   }
  }, () => {
    console.log("Failure");
  })
}
    return (
        <Container>
            <Box 
            sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Avatar sx={{ m: 1, bgcolor: '#42a5f5' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid>
              
              <Grid item xs={12} >
              <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                />
                </FormControl>

              </Grid>
              <Grid item  >
              <FormControl sx={{ m: 1, mt: 3 , width: '30ch' }} variant="outlined">
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={e => setPassword(e.target.value)}
                />
               </FormControl>
              </Grid>
              <Grid   >
              <Link to={'/'} style={{ textDecoration: 'none' }}>
              <Button 
                sx={button}
                type="submit" 
                color="primary"
                variant="contained"
                fullWidth
                onClick={login}
                >
                Sign in
                </Button>
                </Link>

                </Grid>
                <Grid container justifyContent="center">
              <Grid item>
                <Link to="/register">
                  No account? Sign up here
                </Link>
              </Grid>
            </Grid>
              </Grid>
            </Box>
            </Box>
        </Container>
    )
}

const button: SxProps = {
    marginTop: '2rem',
    marginBottom: '2rem',
    width: '12rem',
    marginLeft: '4rem'
}
// const signUp: SxProps = {
//     marginTop: '2rem',
//     marginLeft: '5rem'
// }



/* function Login(){
    

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
                autoComplete="email"
                label='Email' 
                placeholder='Enter email' 
                fullWidth 
                required
                autoFocus
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
 */
