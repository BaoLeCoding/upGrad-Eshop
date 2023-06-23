import { combineReducers } from 'redux';
import navBarReducer from './authReducer';


export default combineReducers({
   navBar: navBarReducer
});