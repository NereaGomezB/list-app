import { combineReducers } from 'redux'
import colorsReducer from './colorsReducers'

export default combineReducers({
  colors: colorsReducer
})