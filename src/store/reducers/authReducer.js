
const initialState = {
   isLogin: false,
   isAdmin: false,
   isRequestLogin: false,
   token: null,
   error: null
}

export default (state = initialState, action) => {
   console.log(action)
   switch (action.type) {
      case 'SIGN_IN_REQUEST':
         return {
            ...state,
            isLogin: false,
            isAdmin: false,
            isRequestLogin: true,
            error: null,
            token: null
         }
      case 'SIGN_IN_SUCCESS':
         return {
            ...state,
            isLogin: true,
            isAdmin: action.payload.isAdmin,
            isRequestLogin: false,
            error: null,
            token: action.payload.token
         }
      case 'SIGN_IN_FAILED':
         return {
            ...state,
            isLogin: false,
            isAdmin: false,
            isRequestLogin: false,
            error: action.payload,
            token: null

         }
      case 'SIGN_OUT':
         return {
            ...state,
            isLogin: false,
            isAdmin: false,
            isRequestLogin: false,
            error: null,
            token: null
         }
      default:
         {
            return state
         }
   }

}