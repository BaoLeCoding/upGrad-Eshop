import React, { Fragment } from 'react'
import { useResolvedPath } from "react-router-dom"
import {  Container, Stack } from '@mui/material'
import { Routes, Route } from "react-router-dom"
import ProductCategories from '../components/ProductCategories/ProductCategories'
import SortBy from '../components/SortBy/SortBy'
import ProductGrid from '../components/ProductGrid/ProductGrid'

const MainPageContents = () => {
   const path = useResolvedPath("").pathname
   return (
      <Fragment>
         <Stack>
            <ProductCategories/>
            <SortBy />
            <ProductGrid />
         </Stack>
      </Fragment>
   )
}

export default MainPageContents