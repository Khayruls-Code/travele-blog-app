import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
  const { signInUser, singInUsingGoogle, error } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    signInUser(email, password, location, navigate)
  }
  const handleGoogleSignIn = (e) => {
    e.preventDefault()
    singInUsingGoogle(location, navigate)
  }
  return (
    <Box className='login-regi'>
      <Box className='form'>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type='email'
            variant="standard"
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type='password'
            variant="standard"
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setPassword(e.target.value)}
          />
          <Button sx={{ py: 1, my: 1 }} type='submit' variant='outlined'>Login</Button>
        </form>
        {
          error && <Alert severity="error">{error}</Alert>
        }
        <Typography>New Here? <NavLink to='/register'>Register</NavLink></Typography>
        <Button onClick={handleGoogleSignIn} sx={{ py: 1, my: 1 }} variant='contained'>Login With Google</Button>
      </Box>
    </Box>
  );
};

export default Login;