import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('liantsiky@gmail.com');
  const [password, setPassword] = useState('liantsiky');

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    const response = await fetch('https://autotrader-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      const userToken = responseData.token;

      console.log(userToken);
      // Stockez le token dans le localStorage
      localStorage.setItem('token', userToken);

      // Redirigez l'utilisateur vers la page d'accueil ou faites autre chose
      navigate('/Acceuille');

    } else {
      console.error('Erreur d\'authentification');
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              // label="Email Address"
              name="email"
              autoComplete="email"
              value={'liantsiky@gmail.com'}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              // label="Password"
              value={'liantsiky'}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Inscription" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;