import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { singInUsingGoogle, createUser, error } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    createUser(email, password, name, navigate)
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
            label="Name"
            type='text'
            variant="standard"
            required
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            type='email'
            variant="standard"
            required
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type='password'
            variant="standard"
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setPassword(e.target.value)}
            required
          />
          <Button sx={{ py: 1, my: 1 }} type='submit' variant='outlined'>Register</Button>
        </form>
        {
          error && <Alert severity="error">{error}</Alert>
        }
        <Typography>Already have an account? <NavLink to='/login'>Login</NavLink></Typography>
        <Button onClick={handleGoogleSignIn} sx={{ py: 1, my: 1 }} variant='contained'>Login With Google</Button>
      </Box>
    </Box>
  );
};

export default Register;