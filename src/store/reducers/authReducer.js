const initialState = {
   isLogin: false,
   isAdmin: false
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'SIGN_IN':
         return {
            ...state,
            isLogin: true,
            isAdmin: false
         }
      case 'SIGN_OUT':
         return {
            ...state,
            isLogin: false,
            isAdmin: false
         }
      default:
         {
            return state
         }
   }

}