import axios from 'axios'
export const signUp = (email, password, contactNumber, lastName, firstName) => {
   return {
      type: 'SIGN_UP',
      payload: { email, password, contactNumber, lastName, firstName }
   }
}

export const signInRequest = () => {
   return {
      type: 'SIGN_IN_REQUEST'
   }
}
export const signInSuccess = (payload) => {
   return {
      type: 'SIGN_IN_SUCCESS',
      payload: payload

   }
}
export const signInFailed = (error) => {
   return {
      type: "SIGN_IN_FAILED",
      payload: error
   }
}
export const signOut = () => {
   return {
      type: 'SIGN_OUT'
   }
}
export const signUpRequest = () => {
   return {
      type: 'SIGN_UP_REQUEST'
   }
}
export const signUpSuccess = () => {
   return {
      type: 'SIGN_UP_SUCCESS'
   }
}
export const signUpFailed = (error) => {
   return {
      type: "SIGN_UP_FAILED",
      payload: error
   }
}
export const fetchSignIn = (email, password) => {
   return (dispatch) => {
      dispatch(signInRequest())
      const body = JSON.stringify({
         "password": password,
         "username": email
      });
      axios.post("http://localhost:8080/api/auth/signin",
         body, { headers: { 'Content-Type': 'application/json' } })
         .then((response) => {
            let token = response.data.token
            //save token to local storage
            localStorage.setItem("token", token)
            // since no get user info by token api, so we just use email to indicate Admin login, further improvement can be made here
            let isAdmin = email === "Admin@gmail.com.vn" ? true : false
           
            dispatch(signInSuccess({ token, isAdmin }))
            
         }
         ).catch(error => dispatch(signInFailed(error)))

   }
}
export const fetchSignUp = (email, password, contactNumber, lastName, firstName) => {
   return (dispatch) => {
      dispatch(signUpRequest())
      let body = JSON.stringify({
         "contactNumber": contactNumber,
         "email": email,
         "firstName": firstName,
         "lastName": lastName,
         "password": password
      })
      axios.post("http://localhost:8080/api/auth/signup",
         body, { headers: { 'Content-Type': 'application/json' } })
         .then((response) => {
            dispatch(signUpSuccess())
         }).catch(error => dispatch(signUpFailed(error)))
   }

}