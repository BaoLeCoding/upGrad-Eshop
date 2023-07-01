import React from 'react'
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { postSignUp } from "../store/actions/authActions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = ({ isLogin, isAdmin, onSignUp }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const [firstNameError, setFirstNameError] = React.useState(null);
  const [lastNameError, setLastNameError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [contactNumberError, setContactNumberError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);
  const [passwordConfirmError, setPasswordConfirmError] = React.useState(null);
  const [flagCanSubmit, setFlagCanSubmit] = React.useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function handleFormChange({ name, value }) {
    setFlagCanSubmit(false)
    if (name === "firstName") {
      setFirstName(value)
      if (!value) {
        setFirstNameError("First Name is required")
        setFlagCanSubmit(false)
      }
      else {
        setFirstNameError(null)
      }
    }
    if (name === "lastName") {
      setLastName(value)
      if (!value) {
        setLastNameError("Last Name is required")
        setFlagCanSubmit(false)
      }
      else {
        setLastNameError(null)
      }
    }
    if (name === "emailAddress") {
      setEmail(value)
      if (!validateEmail(value)) {
        setEmailError("Email is invalid")
        setFlagCanSubmit(false)
      }
      else {
        setEmailError(null)
      }
    }
    if (name === "contactNumber") {
      setContactNumber(value)
      if (!value) {
        setContactNumberError("Contact Number is required")
        setFlagCanSubmit(false)
      }
      else {
        setContactNumberError(null)
      }

    }
    if (name === "password") {
      setPassword(value)
      if (!value) {
        setPasswordError("Password is required")
        setFlagCanSubmit(false)
      }
      else {
        setPasswordError(null)
      }
      if (passwordConfirm !== value) {
        setPasswordConfirmError("Password does not match, please try again")
        setFlagCanSubmit(false)
      }
      else {
        setPasswordConfirmError(null)
      }
    }
    if (name === "passwordConfirm") {
      setPasswordConfirm(value)
      if (!value || value !== password) {
        setPasswordConfirmError("Password does not match, please try again")
        setFlagCanSubmit(false)
      }
      else {
        setPasswordConfirmError(null)
      }
    }
    setFlagCanSubmit(true)
  }
  let handleSubmit = (e) => {
    let data = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "contactNumber": contactNumber,
      "password": password,
    }
    if (flagCanSubmit) { onSignUp(data) }
    else {
      toast.error("Please check your input")
    }
  }

  return (
    <Stack spacing={2} alignItems={"center"}>
      <ToastContainer />
      <LockIcon color="error" />
      <Typography variant="h3">
        Sign Up
      </Typography>
      <TextField
        error={firstNameError !== null}
        helperText={firstNameError}
        name="firstName"
        label="First Name *"
        variant="outlined"
        value={firstName}
        onChange={e => handleFormChange(e.target)} />
      <TextField
        error={lastNameError !== null}
        helperText={lastNameError}
        name="lastName"
        label="Last Name *"
        variant="outlined"
        value={lastName}
        onChange={e => handleFormChange(e.target)} />
      <TextField
        error={emailError !== null}
        helperText={emailError}
        name="emailAddress"
        label="Email Address *" v
        ariant="outlined"
        alue={email}
        onChange={e => handleFormChange(e.target)} />
      <TextField
        error={contactNumberError !== null}
        helperText={contactNumberError}
        name="contactNumber"
        label="Contact Number *"
        variant="outlined"
        value={contactNumber}
        onChange={e => handleFormChange(e.target)} />
      <TextField
        error={passwordError !== null}
        helperText={passwordError}
        name="password"
        label="Password *"
        type="password"
        variant="outlined"
        value={password}
        onChange={e => handleFormChange(e.target)} />
      <TextField
        error={passwordConfirmError !== null}
        helperText={passwordConfirmError}
        name="passwordConfirm"
        label="Confirm Password *"
        type="password"
        variant="outlined"
        value={passwordConfirm}
        onChange={e => handleFormChange(e.target)} />

      <Button variant="contained" onClick={handleSubmit}>SIGN UP</Button>
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
    onSignUp: (data) => dispatch(postSignUp(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);