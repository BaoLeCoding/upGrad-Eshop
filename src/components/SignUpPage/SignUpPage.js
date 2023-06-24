import React from 'react'
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { fetchSignUp } from "../../store/actions/authActions"

const SignUpPage = (isLogin, isAdmin, onSignUp) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");

  return (
    <Stack spacing={2} alignItems={"center"}>
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign Up
      </Typography>
      <TextField id="outlined-basic" label="First Name *" variant="outlined" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <TextField id="outlined-basic" label="Last Name *" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
      <TextField id="outlined-basic" label="Email Address *" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField id="outlined-basic" label="Contact Number *" variant="outlined" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
      <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
      <TextField id="outlined-basic" label="Confirm Password *" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />

      <Button variant="contained" onClick={() => onSignUp()}>SIGN UP</Button>
      <Typography variant='body'><Link to="/login">Already have an account? Sign in </Link></Typography>

    </Stack>
  )
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    isAdmin: state.auth.isAdmin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSignUp: (email, password, contactNumber, lastName, firstName) => { dispatch(fetchSignUp(email, password, contactNumber, lastName, firstName)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);