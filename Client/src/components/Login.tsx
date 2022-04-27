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
     /* TEMPORARY? */
     
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
              <Link to={'/user'} style={{ textDecoration: 'none' }}>
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
