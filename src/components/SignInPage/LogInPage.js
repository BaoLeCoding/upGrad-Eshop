import React from 'react'
import { Alert } from '@mui/material';
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { fetchSignIn } from "../../store/actions/authActions"
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate } from "react-router-dom"

const LogInPage = ({ isLogin, isAdmin, isRequestLogin, error, token, onSignIn }) => {
  const [email, setEmail] = React.useState("Admin@gmail.com.vn");
  const [password, setPassword] = React.useState("1234abcdef");
  return (

    <Stack spacing={2} alignItems={"center"}>
      {isLogin ? <Navigate to="/" /> : null}
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign In
      </Typography>
      <TextField id="outlined-basic" label="Email Address *" placeholder='Enter your email here...' variant="outlined" value={email} onChange={event => setEmail(event.target.value)} />
      <TextField id="outlined-basic" label="Password *" type="password" variant="outlined" value={password} onChange={event => setPassword(event.target.value)} />
      {
        error ?
          <Alert severity="error">Can not sign in please check your Email and Password!</Alert> :
          null
      }
      {isRequestLogin ?
        <CircularProgress /> :
        <Button variant="contained" onClick={() => onSignIn(email, password)}>SIGN IN</Button>
      }
      <Alert severity="info">Admin User: Admin@gmail.com.vn | Password: 1234abcdef</Alert>
      <Typography variant='body'><Link to="/signup">Don't have an account? Sign Up
      </Link></Typography>

    </Stack>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    isAdmin: state.auth.isAdmin,
    isRequestLogin: state.auth.isRequestLogin,
    error: state.auth.error,
    token: state.auth.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (email, password) => dispatch(fetchSignIn(email, password)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);