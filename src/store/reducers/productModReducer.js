let initialState = {
   categories: [],
   isLoading: false,
   error: null,
   addProductError: null
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
      case "ADD_NEW_PRODUCT_SUCCESS":
         return {
            ...state,
            addProductError: null
         }
      case "ADD_NEW_PRODUCT_FAIL":
         return {
            ...state,
            addProductError: action.payload
         }
      default:
         return state
   }
}