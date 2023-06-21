import React from 'react'
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"


const LogInPage = () => {
  return (
    <Stack spacing={2} alignItems={"center"}>
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign In
      </Typography>
      <TextField id="outlined-basic" label="Email Address *" variant="outlined" />
      <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" />
      <Button variant="contained">SIGN IN</Button>
      <Typography variant='body'><Link to="/signup">Don't have an account? Sign Up </Link></Typography>

    </Stack>
  )
}

export default LogInPage