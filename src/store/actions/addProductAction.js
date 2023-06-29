import { addProduct } from "../../services/addProduct";
export const addNewProductSuccess = () => {
   return {
      type: "ADD_NEW_PRODUCT_SUCCESS"
   }
}
export const addNewProductFail = (error) => {
   return {
      type: "ADD_NEW_PRODUCT_FAIL",
      payload: error
   }
}

export const requestPostAddProduct = (product) => {
   return (dispatch) => {

      return addProduct(product).then((response) => {
         dispatch(addNewProductSuccess())
      }).catch((error) => {
         dispatch(addNewProductFail(error))
      })
   }
}