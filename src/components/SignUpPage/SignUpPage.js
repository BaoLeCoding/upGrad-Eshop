import React from 'react'
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const SignUpPage = () => {
  return (
    <Stack spacing={2} alignItems={"center"}>
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign Up
      </Typography>
      <TextField id="outlined-basic" label="First Name *" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name *" variant="outlined" />
      <TextField id="outlined-basic" label="Email Address *" variant="outlined" />
      <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password *" type="password" variant="outlined" />
      <TextField id="outlined-basic" label="Contact Number *" variant="outlined" />
      <Button variant="contained">SIGN UP</Button>
      <Typography variant='body'><Link to="/login">Already have an account? Sign in </Link></Typography>

    </Stack>
  )
}

export default SignUpPage