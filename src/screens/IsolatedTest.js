import React from 'react'
import AddProduct from './AddProduct'

const IsolatedTest = () => {
   let callActionDelete = (id) => {
      console.log("callActionDelete at id " + id)
   }

   return (
      <AddProduct />
   )
}

export default IsolatedTest