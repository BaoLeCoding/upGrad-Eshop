import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material'

import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux'
import { fetchCategories } from '../store/actions/productModActions';
import { Alert } from '@mui/material';
import { requestPostAddProduct } from '../store/actions/addProductAction';

let demoProduct = {
   name: "demoProduct",
   category: "demoCategory",
   price: 100,
   manufacturer: "demoManufacturer",
   availableItem: 100,
   imageUrl: "demoImageUrl",
   description: "demoDescription"
}

let demoEmptyProduct = {
   name: "",
   category: "",
   price: "",
   manufacturer: "",
   availableItem: "",
   imageUrl: "",
   description: ""
}

const ProductModForm = ({ categories, onFetchCategories, productId = null, product = demoEmptyProduct, onRequestPostAddProduct }) => {
   // create a controlled form with material ui to add product with name, category,price,manufacturer,availableItem,price,imageUrl,description
   let [mode, setMode] = useState(productId ? 'edit' : 'add')
   let [name, setName] = useState(product.name)
   let [availableCategories, setAvailableCategories] = useState(product.category)
   let [category, setCategory] = useState(product.category)
   let [price, setPrice] = useState(product.price)
   let [manufacturer, setManufacturer] = useState(product.manufacturer)
   let [availableItem, setAvailableItem] = useState(product.availableItem)
   let [imageUrl, setImageUrl] = useState(product.imageUrl)
   let [description, setDescription] = useState(product.description)
   // let [error, setError] = useState('')
   let [nameError, setNameError] = useState('')
   let [categoryError, setCategoryError] = useState('')
   let [priceError, setPriceError] = useState('')
   let [availableItemError, setAvailableItemError] = useState('')
   let [manufacturerError, setManufacturerError] = useState('')
   let [imageUrlError, setImageUrlError] = useState('')
   let [descriptionError, setDescriptionError] = useState('')

   let handleSubmit = (e) => {
      e.preventDefault()
      let errorFlag = false
      //name cannot be empty
      if (!name) {
         setNameError('Name cannot be empty')
         errorFlag = true
      }
      else {
         setNameError('')
      }
      if (!categories) {
         setCategoryError('Category cannot be empty')
         errorFlag = true
      }
      //price must be number
      if (isNaN(price) | !price) {
         setPriceError('Price must be a number')
         errorFlag = true
      }
      else {
         setPriceError('')
      }
      //availableItem must be number
      if (isNaN(availableItem) | !availableItem) {
         setAvailableItemError('Available Item must be a number')
         errorFlag = true
      }
      else {
         setAvailableItemError('')
      }
      //category cannot be empty
      if (!category) {
         setCategoryError('Category cannot be empty')
         errorFlag = true
      }
      else {
         setCategoryError('')
      }
      //manufacturer cannot be empty
      if (!manufacturer) {
         setManufacturerError('Manufacturer cannot be empty')
         errorFlag = true
      }
      //imageUrl must be a valid url
      if (!imageUrl) {
         setImageUrlError('Image URL cannot be empty')
         errorFlag = true
      }
      else {
         setImageUrlError('')
      }
      //description cannot be empty
      if (!description) {
         setDescriptionError('Description cannot be empty')
         errorFlag = true
      }
      else {
         setDescriptionError('')
      }
      //if error, return
      if (errorFlag) {
         return
      }
      else {
         let product = {
            "name": name,
            "category": category,
            "price": price,
            "manufacturer": manufacturer,
            "availableItems": availableItem,
            "imageUrl": imageUrl,
            "description": description
         }
         onRequestPostAddProduct(product)
      }

   }
   const handleCategorySelectionChange = (value, actionMeta) => {

      if (value === null) {
         setCategory('')
         return
      }
      console.log(value.value);
      setCategory(value.value)
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
            <TextField
               error={nameError != ""}
               helperText={nameError}
               id="name"
               label="Name *"
               value={name}
               onChange={(e) =>
                  setName(e.target.value)} />
            {mode === "add" ?
               <CreatableSelect isClearable options={availableCategories} onChange={handleCategorySelectionChange} /> :
               <TextField id="category" label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />}
            {
               categoryError != "" ?
                  <Alert severity="error">{categoryError}</Alert> :
                  null
            }
            <TextField
               error={priceError != ""}
               helperText={priceError}
               id="price"
               label="Price *"
               value={price}
               onChange={(e) => setPrice(e.target.value)} />
            <TextField
               error={manufacturerError != ""}
               helperText={manufacturerError}
               id="manufacturer"
               label="Manufacturer *"
               value={manufacturer}
               onChange={(e) => setManufacturer(e.target.value)} />
            <TextField
               error={availableItemError != ""}
               helperText={availableItemError}
               id="availableItem"
               label="Available Item *"
               value={availableItem}
               onChange={(e) => setAvailableItem(e.target.value)} />
            <TextField
               error={imageUrlError != ""}
               helperText={imageUrlError}
               id="imageUrl"
               label="Image Url *"
               value={imageUrl}
               onChange={(e) =>
                  setImageUrl(e.target.value)} />
            <img
               src={imageUrl}
               style={{ "maxWidth": 200 }} />
            <TextField
               error={descriptionError != ""}
               helperText={descriptionError}
               id="description"
               abel="Description *"
               value={description}
               onChange={(e) => setDescription(e.target.value)} />


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
      onFetchCategories: () => dispatch(fetchCategories()),
      onRequestPostAddProduct: (product) => dispatch(requestPostAddProduct(product))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModForm)