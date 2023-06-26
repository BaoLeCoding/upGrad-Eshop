import React from 'react'
import { connect } from 'react-redux'
import { Fragment } from 'react'
import { Grid, Stack, Typography } from '@mui/material'

const OrderConfirmation = ({ orderQuantity, product, deliveryAddress }) => {
   console.log("Confirmation", deliveryAddress)
   return (
      <Fragment>
         <h1>Order comfirmation</h1>
         <Grid container spacing={2}>
            <Grid item xs={8}>
               <Stack spacing={2} direction='column'>
                  <Typography variant="h3" textAlign={'left'}>{product.name}</Typography>
                  <Typography variant="h4" textAlign={'left'}>Quantity: {orderQuantity}</Typography>
                  <Typography variant="h5" textAlign={'left'}>Category: {product.category}</Typography>
                  <Typography variant="body" textAlign={'left'}>{product.description}</Typography>
                  <Typography variant="h4" textAlign={'left'}>Total Price: $ {orderQuantity * product.price}</Typography>
               </Stack>
            </Grid>
            <Grid item xs={4}>
               <Stack spacing={2} direction='column'>
                  <Typography variant="h3" textAlign={'left'}>Address Details</Typography>
                  <Typography variant="h5" textAlign={'left'}>Name: {deliveryAddress.name}</Typography>
                  <Typography variant="h5" textAlign={'left'}>Contact Number: {deliveryAddress.contactNumber}</Typography>
                  <Typography variant="h5" textAlign={'left'}>{deliveryAddress.landmark}</Typography>
                  <Typography variant="h5" textAlign={'left'}>{deliveryAddress.street}</Typography>
                  <Typography variant="h5" textAlign={'left'}>{deliveryAddress.city}</Typography>
                  <Typography variant="h5" textAlign={'left'}>{deliveryAddress.state}</Typography>
                  <Typography variant="h5" textAlign={'left'}>Zip: {deliveryAddress.zip}</Typography>

               </Stack>
            </Grid>
         </Grid>
      </Fragment>
   )
}

const mapStateToProps = (state) => ({
   orderQuantity: state.orderPage.orderQuantity,
   product: state.orderPage.product,
   deliveryAddress: state.orderPage.deriveryAddress
})
export default connect(mapStateToProps)(OrderConfirmation)
