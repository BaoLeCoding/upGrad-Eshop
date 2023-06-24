import React, { Fragment } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Stack } from '@mui/material'
import { connect } from 'react-redux'
import { fetchProductList } from "../../store/actions/productListActions"
import { useEffect } from 'react'


const ProductGrid = ({ products, isAdmin, filterByCategory, onfetchProductList }) => {

   useEffect(() => {
      onfetchProductList()
   }, [filterByCategory])
   let filteredProducts = (filterByCategory === "All") ? products : products.filter((product) => product.category === filterByCategory)

   return (
      <Fragment>
         <div>ProductGrid</div>
         <Stack direction="row" display="flex" spacing={15} style={{ "flex": 1, "flex-wrap": "wrap", "justify-content": "flex-end", "margin": "15px 15px", "padding": "15px", "row-gap": "3em", "column-gap": "3em" }}>

            {filteredProducts.map((product) => {
               return (
                  <ProductCard key={product.id} product={product} isAdmin={isAdmin} />
               )
            })}
         </Stack>
      </Fragment>
   )
}

let mapStateToProps = (state) => {
   return {
      products: state.productList.products,
      isAdmin: state.auth.isAdmin,
      filterByCategory: state.categories.filterByCategory
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      onfetchProductList: () => dispatch(fetchProductList())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid)