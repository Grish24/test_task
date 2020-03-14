import {combineReducers} from "redux";
import createName from './createName/reducers'
import createStyle from './createStyle/reducers'
import createAccount from './createAccount/reducers'
import login from './Login/reducers'

export default combineReducers({
    createName,
    createStyle,
    createAccount,
    login
})