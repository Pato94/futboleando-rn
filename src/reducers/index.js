import { combineReducers } from 'redux'
import matches from './matches'
import nav from './nav'

export default combineReducers({
  nav,
  matches
})
