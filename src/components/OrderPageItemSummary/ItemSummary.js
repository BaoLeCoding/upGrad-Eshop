import React from 'react'
import { Fragment } from 'react'
import { Container, Stack, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'


const ItemSummary = ({ orderQuantity, product }) => {
   console.log(orderQuantity, product)
   const [quantity, setQuantity] = useState(orderQuantity)
   const { name, description, price, category, availableItems, imageUrl } = product

   return (
      <Fragment>
         <Container maxWidth="lg">
            {/* <h1>ProductDetailPage</h1> */}
            <Stack spacing={2} direction='row'>
               <img src={imageUrl} alt={name} style={{ "maxWidth": 300, "maxHeight": 400 }} />
               <Stack spacing={2} direction='column'>
                  <Typography variant="h3" textAlign={'left'}>{name}</Typography>
                  <Typography variant="h4" textAlign={'left'}>Quantity: {quantity}</Typography>
                  <Typography variant="h5" textAlign={'left'}>Category: {category}</Typography>
                  <Typography variant="body" textAlign={'left'}>{description}</Typography>
                  <Typography variant="h4" textAlign={'left'}>Total Price: $ {quantity * price}</Typography>

               </Stack>

            </Stack>
         </Container>
      </Fragment>
   )
}

const mapStateToProps = (state) => ({
   orderQuantity: state.orderPage.orderQuantity,
   product: state.orderPage.product
})
export default connect(mapStateToProps)(ItemSummary)