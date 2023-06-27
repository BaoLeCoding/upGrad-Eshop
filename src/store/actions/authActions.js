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
            // NOte: since API does not return user information or tokenbase fetch information, we fetch all user the filter by email
            // fetch user information
            let user = null
            let isAdmin = null
            let userId = null
            axios.get("http://localhost:8080/api/users", { headers: { Authorization: `Bearer ${token}` } })
               .then((response) => {
                  user = response.data.filter(user => user.email === email)
                  isAdmin = user[0].roles[0].name === "ADMIN"
                  userId = user[0].id
                  dispatch(signInSuccess({ token, isAdmin, userId }))
               }
               ).catch(error => dispatch(signInFailed(error)))
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