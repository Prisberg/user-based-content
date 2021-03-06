import { Avatar, Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, SxProps, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

// import { AuthContext } from "../Context/AuthContext";

import axios, { AxiosResponse } from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to={""}>
        Posts.Posts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    showPassword: false,
  });



  const login = () => {
    axios.post("http://localhost:4000/login", {
      username,
      password
    }, {
      withCredentials: true
    }).then((res: AxiosResponse) => {
      if (res.data === "success") {
        console.log("success");
        window.location.href = "/user"
      }
    }, () => {
      console.log("Failure");
    })
  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(event.target.value)
  };

  const handleProceed = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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
        <Box component="form" sx={{ mt: 3 }} onSubmit={handleProceed}>
          <Grid>
            <Grid item xs={12} >
              <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <TextField
                  type="text"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid   >
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
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )
}

const button: SxProps = {
  marginTop: '2rem',
  marginBottom: '2rem',
  width: '12rem',
  marginLeft: '4rem'
}
