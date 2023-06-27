
const initalState = {
   products: [],
   loading: false,
   error: null,
   filterByCategory: null,
   sortByMode: null,
   openDlgCofirmDelete: false,
   itemIdToDelete: null
}


export const productListReducer = (state = initalState, action) => {
   switch (action.type) {
      case 'PRODUCT_LIST_REQUEST':
         return {
            ...state,
            loading: true
         }
      case 'PRODUCT_LIST_SUCCESS':
         return {
            ...state,
            loading: false,
            products: action.payload
         }
      case 'PRODUCT_LIST_FAIL':
         return {
            ...state,
            loading: false,
            error: action.payload
         }
      case "CONFIRMING_ITEM_DELETION":
         return {
            ...state,
            openDlgCofirmDelete: true,
            itemIdToDelete: action.payload
         }
      case "CONFIRMED_ITEM_DELETION":
         return {
            ...state,
            openDlgCofirmDelete: false
         }
      case "CANCEL_ITEM_DELETION":
         return {
            ...state,
            openDlgCofirmDelete: false,
            itemIdToDelete: null
         }
      default:
         return state
   }
}