import * as React from 'react';
import { useState } from 'react'
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

// { Itemname = "Shoes", 
// ItemPrice = "1000", 
// Description = "This is a shoe", 
// ItemImg = "https://placehold.co/600x400/EEE/31343C", 
// isAdmin = false }
export default function ProductCard({ product, isAdmin }) {
  const { id, name, category, price, description, manufacturer, availableItems, imageUrl } = product
  const [Itemname, setItemname] = useState(name)
  const [ItemPrice, setItemPrice] = useState(price)
  const [Description, setDescription] = useState(description)
  const [ItemImg, setItemImg] = useState(imageUrl)


  const maxCardWidth = useState(400)
  const maxImageHeight = useState(200)
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
          <IconButton>
            <DeleteIcon />
          </IconButton>}
      </CardActions>
    </Card >


  );
}