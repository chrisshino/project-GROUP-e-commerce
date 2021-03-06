import { combineReducers } from "redux";
import hamburgerReducer from './hamburger-reducer'
import cartReducer from './cart-reducer'
import cartToggle from './cart-toggle-reducer'
import totalReducer from './total-reducer';
import stripeReducer from './stripe-reducer'
import authReducer from './auth-reducer'
/*
import reducers we create into this file, then feed each one into the
empty object below to export it out into our store component/file

 */

export default combineReducers({hamburgerReducer, cartReducer, cartToggle, totalReducer, stripeReducer, authReducer})