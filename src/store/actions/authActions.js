export const signUp=(email,password,contactNumber,lastName,firstName)=>{
   return {
      type:'SIGN_UP',
      payload:{email,password,contactNumber,lastName,firstName}
   }
}
export const signIn=(email,password)=>{
   return {
      type:'SIGN_IN',
      payload:{email,password}
   }
}
export const signOut=()=>{
   return {
      type:'SIGN_OUT'
   }
}