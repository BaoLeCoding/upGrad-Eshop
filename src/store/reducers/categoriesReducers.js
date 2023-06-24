const initialState = {
   categories: [],
   isLoading: false,
   error: null
}

export default (state = initialState, action) => {
   switch (action.type) {
      case "FETCH_CATEGORIES_REQUEST":
         return {
            ...state,
            isLoading: true,
            error: null
         }
      case "FETCH_CATEGORIES_SUCCESS":
         return {
            ...state,
            isLoading: false,
            categories: action.payload,
            error: null
         }
      case "FETCH_CATEGORIES_FAILED":
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }
      default:
         {
            return state
         }
   }

}