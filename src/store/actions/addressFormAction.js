//define action to fetch saved address and push new address via API call
export const saveAddressRequest = () => {
   return {
      type: "SAVE_ADDRESS_REQUEST"
   }
}
export const saveAddressSuccess = (data) => {
   return {
      type: "SAVE_ADDRESS_SUCCESS",
      payload: data
   }
}
export const saveAddressFail = (error) => {
   return {
      type: "SAVE_ADDRESS_FAIL",
      payload: error
   }
}
export const addNewAddressRequest = () => {
   return {
      type: "ADD_NEW_ADDRESS_REQUEST"
   }
}
export const addNewAddressSuccess = (data) => {
   return {
      type: "ADD_NEW_ADDRESS_SUCCESS",
      payload: data
   }
}
export const addNewAddressFail = (error) => {
   return {
      type: "ADD_NEW_ADDRESS_FAIL",
      payload: error
   }
}
export const fetchSavedAddress = () => {
   return (dispatch) => {
      dispatch(saveAddressRequest())
      axios.get(`http://localhost:8080/api/address`)
         .then(res => {
            dispatch(saveAddressSuccess(res.data))
         })
         .catch(err => {
            dispatch(saveAddressFail(err.message))
         })
   }
}
export const postNewAddress = (data) => {
   return (dispatch) => {
      dispatch(addNewAddressRequest())
      axios.post(`http://localhost:8080/api/address`, data)
         .then(res => {
            dispatch(addNewAddressSuccess(res.data))
         })
         .catch(err => {
            dispatch(addNewAddressFail(err.message))
         })
   }
}