import React from 'react'
import ProductCard from "../components/ProductCard/ProductCard.js"
import ProductCategories from '../components/ProductCategories/ProductCategories.js'
import SortBy from '../components/SortBy/SortBy.js'
import { Fragment } from 'react'
const ProductPage = () => {
   return (
      <Fragment>
      <ProductCategories/>
      <SortBy />
      </Fragment>
   )
}

export default ProductPage