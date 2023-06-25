import React from 'react'
import { Fragment } from 'react'
import { Container, Stack, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'


const ItemSummary = () => {
   return (
      <Fragment>
         <Container maxWidth="lg">
            {/* <h1>ProductDetailPage</h1> */}
            <Stack spacing={2} direction='row'>
               <img src={imageUrl} alt={name} style={{ "maxWidth": 300, "maxHeight": 400 }} />
               <Stack spacing={2} direction='column'>
                  <Stack spacing={2} direction='row'>
                     <Typography variant="h4" textAlign={'left'}>{name}</Typography>
                     <Typography variant="h6" textAlign={'left'}>Available Quantity {availableItems}</Typography>
                  </Stack>
                  <Typography variant="h5" textAlign={'left'}>Category: {category}</Typography>
                  <Typography variant="body" textAlign={'left'}>{description}</Typography>
                  <Typography variant="h4" textAlign={'left'}>$ {price}</Typography>
                  <TextField
                     id="outlined-number"
                     label="Enter Quantity *"
                     type="number"
                     InputLabelProps={{
                        shrink: true,
                     }}
                     variant="outlined"
                     value={quantity}
                     onChange={(e) => handleChangeQuantity(e.target.value)}
                  />
                  <Button variant="contained" onClick={() => { }}>PLACE ORDER</Button>
               </Stack>

            </Stack>
         </Container>
      </Fragment>
   )
}

export default ItemSummary