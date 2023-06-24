import axios from "axios"
export let fetchCategoriesRequest = () => {
   return {
      type: "FETCH_CATEGORIES_REQUEST"
   }
}
export const fetchCategoriesSuccess = (categories) => {
   return {
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: categories
   }
}
export const fetchCategoriesFailed = (error) => {
   return {
      type: "FETCH_CATEGORIES_FAILED",
      payload: error
   }
}
export const fetchCategories = () => {
   return (dispatch) => {
      dispatch(fetchCategoriesRequest())
      axios.get("http://localhost:8080/api/products/categories")
         .then((response) => {
            const categories = response.data
            dispatch(fetchCategoriesSuccess(categories))
         })
         .catch((error) => {
            dispatch(fetchCategoriesFailed(error))
         })
   }
}