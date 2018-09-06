import { combineReducers } from 'redux'
import indexReducer from './indexReducer'
import weatherReducer from './weatherReducer'
import articleReducer from './articleReducer'

export default combineReducers({
  indexReducer,
  weatherReducer,
  articleReducer
})