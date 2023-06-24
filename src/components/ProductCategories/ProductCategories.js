import * as React from 'react';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/actions/categoriesActions'
import { connect } from 'react-redux';
function ProductCategories({ ProductCategories, onFetchCategories }) {
   const [selectedCategory, setSelectedCategory] = useState('ELECTRONICS');

   const handleChange = (event, newSelectedCategory) => {
      setSelectedCategory(newSelectedCategory);
   };

   useEffect(() => {
      onFetchCategories()
   }, [ProductCategories])

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
const mapStateToProps = (state) => {
   return {
      ProductCategories: state.categories.categories
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      onFetchCategories: () => dispatch(fetchCategories())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories)