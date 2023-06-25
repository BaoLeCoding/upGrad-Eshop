import React, { Fragment } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormLabel, TextField, Button } from '@mui/material';

const AddressForm = () => {
   const [selectSavedAddress, setAge] = React.useState('');
   // Create controlled form inputs
   const [name, setName] = React.useState('');
   const [contactNumber, setContactNumber] = React.useState('');
   const [street, setStreet] = React.useState('');
   const [city, setCity] = React.useState('');
   const [state, setState] = React.useState('');
   const [landmark, setLandmark] = React.useState('');
   const [zipCode, setZipCode] = React.useState('');

   const handleSelectSavedAddress = (event) => {
      setAge(event.target.value);
   };
   const handleFormInutChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
         case 'name':
            console.log('name', value);
            setName(value);
            break;
         case 'contactNumber':
            setContactNumber(value);
            break;
         case 'street':
            setStreet(value);
            break;
         case 'city':
            setCity(value);
            break;
         case 'state':
            setState(value);
            break;
         case 'landmark':
            setLandmark(value);
            break;
         case 'zipCode':
            setZipCode(value);
            break;
         default:
            break;
      }
   }

   return (
      <Fragment>
         <FormControl fullWidth >
            <InputLabel id="select-address-label">Select Address</InputLabel>
            <Select
               labelId="select-address-label"
               id="select-address"
               value={selectSavedAddress}
               label="Address"
               onChange={handleSelectSavedAddress}
            >
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormLabel>Add Address</FormLabel>
            <TextField placeholder='Name*' name="name" value={name} onChange={handleFormInutChange}></TextField>
            <TextField placeholder='ContactNumber*' name="contactNumber" value={contactNumber}></TextField>
            <TextField placeholder='Street*' name="street" value={street}></TextField>
            <TextField placeholder='City*' name="city" value={city}></TextField>
            <TextField placeholder='State*' name="state" value={state}></TextField>
            <TextField placeholder='Landmark*' name="landmark" value={landmark}></TextField>
            <TextField placeholder='Zip Code*' name="landmark" value={zipCode}></TextField>
            <Button variant='contained'>SAVE ADDRESS</Button>

         </FormControl>


      </Fragment >
   )
}

export default AddressForm