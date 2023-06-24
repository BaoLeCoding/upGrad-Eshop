import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoriesReducers from './categoriesReducers';
import { productListReducer } from './productListReducers';
import { shortByReducer } from './shortByReducer'
import { searchBarReducer } from './searchBarReducer'

export default combineReducers({
   auth: authReducer,
   categories: categoriesReducers,
   productList: productListReducer,
   shortBy: shortByReducer,
   searchBar: searchBarReducer
});