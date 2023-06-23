import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material'
const SortBy = () => {
   const [age, setAge] = React.useState('');
   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
         <InputLabel id="sorting-label">Sort By</InputLabel>
         <Select
            labelId="sorting"
            id="sorting-picker"
            value={null}
            label="Default"
            onChange={handleChange}
            placeholder='Select...'
         >
            <MenuItem value={0}>Default</MenuItem>
            <MenuItem value={1}>Price:High to Low</MenuItem>
            <MenuItem value={2}>Price:Low to High</MenuItem>
            <MenuItem value={3}>Newest</MenuItem>
         </Select>
      </FormControl>
   )
}

export default SortBy