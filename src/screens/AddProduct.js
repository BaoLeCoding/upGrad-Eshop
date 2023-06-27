import React, { Fragment } from 'react'
import { useState } from 'react'
import { FormControl, TextField, Button } from '@mui/material'


const AddProduct = () => {
   // create a controlled form with material ui to add product with name, category,price,manufacturer,availableItem,price,imageUrl,description

   let [name, setName] = useState('')
   let [category, setCategory] = useState('')
   let [price, setPrice] = useState('')
   let [manufacturer, setManufacturer] = useState('')
   let [availableItem, setAvailableItem] = useState('')
   let [imageUrl, setImageUrl] = useState('')
   let [description, setDescription] = useState('')
   let handleSubmit = (e) => {
      e.preventDefault()
      console.log('submitting form')
   }




   return (
      <Fragment>
         <h1>Add Product</h1>
         <FormControl>
            {/* Create input field for each state */}
            <TextField id="name" label="Name *" value={name} onChange={(e) => setName(e.target.value)} />
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

export default AddProduct