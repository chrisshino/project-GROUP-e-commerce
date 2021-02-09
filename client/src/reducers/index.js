import { combineReducers } from "redux";
import hamburgerReducer from './hamburger-reducer'
 
/*
import reducers we create into this file, then feed each one into the
empty object below to export it out into our store component/file

 */

export default combineReducers({hamburgerReducer})