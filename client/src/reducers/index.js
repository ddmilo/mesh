import {combineReducers} from 'redux'
import contacts from './contactReducer.js'
import {routerReducer as router} from 'react-router-redux' // we need this for react-router

// Combine all reducers
const rootReducer = combineReducers({contacts, router})

export default rootReducer