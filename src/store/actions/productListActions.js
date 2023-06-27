import { deleteProduct } from "../../services/deleteProduct"
export const producListRequest = () => {
   return {
      type: "PRODUCT_LIST_REQUEST"
   }
}
export const producListSuccess = (data) => {
   return {
      type: "PRODUCT_LIST_SUCCESS",
      payload: data
   }
}
export const producListFail = (error) => {
   return {
      type: "PRODUCT_LIST_FAIL",
      payload: error
   }
}
export const confirmItemDeletion = (itemId) => {
   return {
      type: "CONFIRMED_ITEM_DELETION",
      payload: itemId
   }
}
export const cancelItemDeletion = () => {
   return {
      type: "CANCEL_ITEM_DELETION"
   }
}
export const requestDeleteProduct = () => {
   return (dispatch) => {
      deleteProduct()
   }
}

export const fetchProductList = () => {
   return (dispatch) => {
      dispatch(producListRequest())
      fetch("http://localhost:8080/api/products")
         .then(res => res.json())
         .then(data => {
            dispatch(producListSuccess(data))
         })
         .catch(error => {
            dispatch(producListFail(error))
         })
   }
}