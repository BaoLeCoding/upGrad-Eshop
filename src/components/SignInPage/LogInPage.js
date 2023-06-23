import React from 'react'
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { connect } from "react-redux";


const LogInPage = ({ onSignIn }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Stack spacing={2} alignItems={"center"}>
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign In
      </Typography>
      <TextField id="outlined-basic" label="Email Address *" placeholder='Enter your email here...' variant="outlined" value={email} onChange={event => setEmail(event.target.value)} />
      <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" value={password} onChange={event => setPassword(event.target.value)} />
      <Button variant="contained" onClick={() => onSignIn(email, password)}>SIGN IN</Button>
      <Typography variant='body'><Link to="/signup">Don't have an account? Sign Up </Link></Typography>

    </Stack>
  )
}

const mapSateToProps = (state) => {
  return {
    isLogin: state.navBar.isLogin,
    isAdmin: state.navBar.isAdmin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (email, password) => dispatch({ type: 'SIGN_IN', payload: { email, password } }),
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(LogInPage);