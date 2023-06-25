import React from 'react'
import ProductCard from "../components/ProductCard/ProductCard.js"
import ProductCategories from '../components/ProductCategories/ProductCategories.js'
import ProductGrid from '../components/ProductGrid/ProductGrid.js'
import SortBy from '../components/SortBy/SortBy.js'
import { Fragment } from 'react'
import { Stack, Container } from '@mui/material'
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import { useResolvedPath } from "react-router-dom"

const ProductPage = () => {
   const path = useResolvedPath("").pathname;

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