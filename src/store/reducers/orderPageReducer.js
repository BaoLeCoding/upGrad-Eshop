const initalState = {
   orderQuantity: null,
   product: null,
}

export const orderPageReducer = (state = initalState, action) => {
   switch (action.type) {
      case 'SET_ORDER_ITEM':
         return {
            ...state,
            orderQuantity: action.payload.orderQuantity,
            product: action.payload.product
         }
      default:
         return state
   }
}