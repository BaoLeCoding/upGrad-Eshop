import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoriesReducers from './categoriesReducers';
import { productListReducer } from './productListReducers';


export default combineReducers({
   auth: authReducer,
   categories: categoriesReducers,
   productList: productListReducer
});