import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';




const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: 'auto',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing("5%"),
      marginRight: theme.spacing("5%"),
      width: 'auto',
      minWidth: '50%'
   },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}));

export default function MenuAppBar() {
   const [isLogin, setIsLogin] = React.useState(false);
   const [isAdmin, setIsAdmin] = React.useState(false);

   return (
      <Box sx={{ flexGrow: 1 }}>

         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <ShoppingCartIcon />
               </IconButton>
               <Typography variant="h6">
                  upGrad E-shop
               </Typography>
               {isLogin &&
                  <Search style={{ marginLeft: 'auto' }}>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                     />
                  </Search>
               }
               {!isLogin &&
                  <Stack direction="row" spacing={2} padding={1} style={{ marginLeft: 'auto' }}>
                     <Button color="inherit">Login</Button>
                     <Button color="inherit">Sign Up</Button>
                  </Stack>
               }

               {isLogin &&
                  <Stack direction="row" spacing={2} padding={1} style={{ marginLeft: 'auto' }}>
                     <Button color="inherit">Home</Button>
                     {isAdmin && <Button color="inherit">Add Product</Button>}
                     <Button color="secondary" variant='contained'>Logout</Button>
                  </Stack>
               }



            </Toolbar>
         </AppBar>
      </Box >
   );
}