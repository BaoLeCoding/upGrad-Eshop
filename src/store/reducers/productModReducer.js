let initialState = {
   categories: [],
   isLoading: false,
   error: null
}

export default function addProductReducer(state = initialState, action) {
   switch (action.type) {
      case "FETCH_CATEGORIES_SUCCESS":
         return {
            ...state,
            categories: action.payload,
            isLoading: false,
            error: null
         }
      case "FETCH_CATEGORIES_FAILED":
         return {
            ...state,
            categories: [],
            isLoading: false,
            error: action.payload
         }
      default:
         return state
   }
}