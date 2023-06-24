import React from 'react'
import ProductCard from "../components/ProductCard/ProductCard.js"
import ProductCategories from '../components/ProductCategories/ProductCategories.js'
import ProductGrid from '../components/ProductGrid/ProductGrid.js'
import SortBy from '../components/SortBy/SortBy.js'
import { Fragment } from 'react'
import { Stack,Container } from '@mui/material'

const ProductPage = () => {
   return (
      <Fragment>
         <Container maxWidth="lg">
            <Stack direction="column" margin={2} >
               <ProductCategories />
               <SortBy />
               <ProductGrid />
            </Stack>
         </Container>
      </Fragment>
   )
}

export default ProductPage