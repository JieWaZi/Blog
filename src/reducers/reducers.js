import { combineReducers } from 'redux'
import indexReducer from './indexReducer'
import statisticsReducer from './statisticsReducer'

export default combineReducers({
  indexReducer,
  statisticsReducer
})