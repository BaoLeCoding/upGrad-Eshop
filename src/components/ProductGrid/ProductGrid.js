import React, { Fragment } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Stack } from '@mui/material'
import { connect } from 'react-redux'
import { fetchProductList } from "../../store/actions/productListActions"
import { useEffect } from 'react'


const ProductGrid = ({ products, isAdmin, filterByCategory, sortByMode, searchItemName, onfetchProductList }) => {

   useEffect(() => {
      onfetchProductList()
   }, [filterByCategory, sortByMode, searchItemName])
   let filteredProducts = (filterByCategory === "All") ? products : products.filter((product) => product.category === filterByCategory)
   switch (sortByMode) {
      case 1:
         filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
         break;
      case 2:
         filteredProducts = filteredProducts.sort((a, b) => a.price - b.price)
         break;
      case 3:
         filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
         break;
      default:
         break;
   }
   filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchItemName.toLowerCase()))

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
      filterByCategory: state.categories.filterByCategory,
      sortByMode: state.shortBy.shortByMode,
      searchItemName: state.searchBar.searchItemName
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      onfetchProductList: () => dispatch(fetchProductList())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid)