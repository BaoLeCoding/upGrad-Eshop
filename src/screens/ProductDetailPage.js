import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchProductDetail } from '../store/actions/productDetailActions'
import { connect } from 'react-redux'

// product ={ id = "123", name = "Fjallraven - Foldsack", category = "men's clothing", price = "200", description = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", manufacturer = "crowdlean", availableItems = 78, imageUrl = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }
const ProductDetailPage = ({ product, onFetchProductDetail, onSetOrderItem }) => {

   const [quantity, setQuantity] = useState(1)
   const [toOrderPage, setToOrderPage] = useState(false)
   const handleChangeQuantity = (value) => {
      if (value > 0 && value <= availableItems) { setQuantity(value) }
   }
   const handlePlaceOrder = () => {
      onSetOrderItem(quantity, product)
      setToOrderPage(true)
      // console.log(quantity, product)
   }


   const productId = useParams().id
   useEffect(() => {
      onFetchProductDetail(productId)
   }, [productId])
   let { name, category, price, description, availableItems, imageUrl } = product

   return (
      <Fragment>
         {toOrderPage ? <Navigate to="/order" /> : null}
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
                  <Button variant="contained" onClick={() => handlePlaceOrder()}>PLACE ORDER</Button>
               </Stack>

            </Stack>
         </Container>
      </Fragment>
   )
}

const mapStateToProps = (state) => ({
   product: state.productDetail.product
})
const mapDispatchToProps = (dispatch) => {
   return {
      onFetchProductDetail: (id) => dispatch(fetchProductDetail(id)),
      onSetOrderItem: (orderQuantity, product) => dispatch({ type: 'SET_ORDER_ITEM', payload: { orderQuantity, product } })
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)