import { combineReducers } from 'redux'
import matches from './matches'
import nav from '../navigation/nav_reducer'

export default combineReducers({
  matches,
  nav
})
