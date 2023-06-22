import * as React from 'react';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export default function ProductCategories({ ProductCategories = ['ALL', 'APPAREL', 'ELECTRONICS', 'PERSONAL CARE'] }) {
   const [selectedCategory, setSelectedCategory] = useState('ELECTRONICS');

   const handleChange = (event, newSelectedCategory) => {
      setSelectedCategory(newSelectedCategory);
   };
   return (
      <ToggleButtonGroup
         color="primary"
         value={selectedCategory}
         exclusive
         onChange={handleChange}
         aria-label="Category"
      >
         {ProductCategories.map((category) => (<ToggleButton value={category} >{category}</ToggleButton >))}

      </ToggleButtonGroup>
   );
}