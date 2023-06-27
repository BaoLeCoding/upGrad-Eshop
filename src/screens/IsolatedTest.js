import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const IsolatedTest = () => {
   let callActionDelete = (id) => {
      console.log("callActionDelete at id " + id)
   }

   return (
      <ProductCard isAdmin={true} callBackActionOnDeletion={callActionDelete} />
   )
}

export default IsolatedTest