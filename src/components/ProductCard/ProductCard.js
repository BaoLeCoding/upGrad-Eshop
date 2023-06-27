import * as React from 'react';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { confirmItemDeletion } from '../../store/actions/productCardActions'
import { requestConfirmItemDeletion } from '../../store/actions/productCardActions'
import ConfirmationDialog from '../../commons/ConfirmationDialog/ConfirmationDialog';

let demoData = {
  "id": "123",
  "name": "Demo Item Name",
  "category": "Demo Item Category",
  "price": "123",
  "description": "Demo Item Description",
  "manufacturer": "Demo Item Manufacturer",
  "availableItems": "123",
  "imageUrl": "https://placehold.co/600x400/EEE/31343C"
}

function ProductCard({ product = demoData, isAdmin = false, onRequestConfirmItemDeletion }) {
  const { id, name, category, price, description, manufacturer, availableItems, imageUrl } = product
  const [Itemname, setItemname] = useState(name)
  const [ItemPrice, setItemPrice] = useState(price)
  const [Description, setDescription] = useState(description)
  const [ItemImg, setItemImg] = useState(imageUrl)


  const maxCardWidth = useState(400)
  const maxImageHeight = useState(200)

  // const [confirmingDeletion, setConfirmingDeletion] = useState(false)
  // const [showConfirmationDlg, setShowConfirmationDlg] = useState(false)
  // const [openDialogFnc, setOpenDialogFnc] = useState()
  // console.log(openDialogFnc)
  // let handleDeleteCallback = () => {
  //   // console.log("handleDeleteCallback")
  //   if (openDialogFnc) {
  //     // console.log("call openDialogFnc")
  //     openDialogFnc(true)
  //   }
  //   setConfirmingDeletion(true)
  // }

  // let handleConfirmDeletion = (setOpenDialogFnc) => {
  //   // console.log("handleConfirmDeletion")
  //   setConfirmingDeletion(false)
  //   setOpenDialogFnc(setOpenDialogFnc)
  // }


  // useEffect(() => {
  //   if (confirmingDeletion) {
  //     // console.log("confirmingDeletion")
  //     setShowConfirmationDlg(true)
  //   }
  // }, [confirmingDeletion])

  return (

    <Card sx={{ maxWidth: maxCardWidth }}>
      <Link to={`/${id}`} style={{ textDecoration: "none" }}>
        <CardMedia
          sx={{ height: maxImageHeight }}
          image={ItemImg}
          title={Itemname}
        />
      </Link>
      <CardContent>
        <Stack spacing={2} direction="row" style={{ display: "flex", marginLeft: 'auto' }}>
          <Typography gutterBottom variant="h5" component="div" style={{ flexGrow: 1, textAlign: "left" }}>
            {Itemname}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {"$ " + ItemPrice}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Buy button link to product detail */
          <Link to={`/${id}`} style={{ textDecoration: "none" }}>
            <Button size="small" variant="contained" style={{ marginRight: "auto" }} >BUY</Button>
          </Link>}
        {isAdmin &&
          <IconButton>
            <EditIcon />
          </IconButton>}
        {isAdmin &&
          <IconButton onClick={(e) => onRequestConfirmItemDeletion(id)}>
            <DeleteIcon />
          </IconButton>}
      </CardActions>
    </Card >


  );
}

// let mapStateToProps = (state) => {
//   return {
//     productid2delete: state.productCard.productid2delete,
//     confirmingDeletion: state.productCard.confirmingDeletion,
//     confirmedDeletion: state.productCard.confirmedDeletion,
//     canceledDeletion: state.productCard.canceledDeletion
//   }
// }

let mapDispatchToProps = (dispatch) => {
  return {
    onRequestConfirmItemDeletion: (id) => dispatch(requestConfirmItemDeletion(id))
  }
}
export default connect(null, mapDispatchToProps)(ProductCard)