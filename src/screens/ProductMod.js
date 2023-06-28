import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material'

import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux'
import { fetchCategories } from '../store/actions/productModActions';
const ProductModForm = ({ categories, onFetchCategories }) => {
   // create a controlled form with material ui to add product with name, category,price,manufacturer,availableItem,price,imageUrl,description

   let [name, setName] = useState('')
   let [availableCategories, setAvailableCategories] = useState('')
   let [category, setCategory] = useState(categories)
   let [price, setPrice] = useState('')
   let [manufacturer, setManufacturer] = useState('')
   let [availableItem, setAvailableItem] = useState('')
   let [imageUrl, setImageUrl] = useState('')
   let [description, setDescription] = useState('')
   let handleSubmit = (e) => {
      e.preventDefault()
      console.log('submitting form')
   }
   useEffect(() => {
      onFetchCategories()
   }, [])

   useEffect(() => {
      //convert categories to array of objects for react-select

      setAvailableCategories(
         categories.map((category) => {
            return { value: category, label: category }
         }
         ))
   }, [categories])


   return (
      <Fragment>
         <h1>Add Product</h1>
         <FormControl>
            {/* Create input field for each state */}
            <TextField id="name" label="Name *" value={name} onChange={(e) => setName(e.target.value)} />
            <CreatableSelect isClearable options={availableCategories} />
            <TextField id="category" label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <TextField id="price" label="Price *" value={price} onChange={(e) => setPrice(e.target.value)} />
            <TextField id="manufacturer" label="Manufacturer *" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
            <TextField id="availableItem" label="Available Item *" value={availableItem} onChange={(e) => setAvailableItem(e.target.value)} />
            <TextField id="imageUrl" label="Image Url *" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <TextField id="description" label="Description *" value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleSubmit}>SAVE PRODUCT</Button>
         </FormControl>

      </Fragment>
   )
}

let mapStateToProps = (globalState) => {
   return {
      categories: globalState.categories.categories
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      onFetchCategories: () => dispatch(fetchCategories())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModForm)