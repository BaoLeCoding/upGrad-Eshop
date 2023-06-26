import axios from 'axios'
export const orderingRequest = () => {
   return {
      type: "ORDERING_REQUEST"
   }
}
export const orderingSuccess = (data) => {
   return {
      type: "ORDERING_SUCCESS",
      payload: data
   }
}
export const orderingFail = (error) => {
   return {
      type: "ORDERING_FAIL",
      payload: error
   }
}
export const postRequestOrdering = (data) => {
   return (dispatch) => {
      dispatch(orderingRequest())
      data = {...data, user: localStorage.getItem('userId') }
      axios.post(`http://localhost:8080/api/orders`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
         .then(res => {
            dispatch(orderingSuccess(res.data))
         })
         .catch(err => {
            dispatch(orderingFail(err.message))
         })
   }
}