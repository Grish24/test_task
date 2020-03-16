import {combineReducers} from "redux";
import createName from './createName'
import createStyle from './createStyle'
import createAccount from './createAccount'
import login from './login'

export default combineReducers({
    createName,
    createStyle,
    createAccount,
    login
})