import { combineReducers } from 'redux'
import matches from './matches'
import nav from './nav'
import login from './login'

export default combineReducers({
  login,
  matches,
  nav
})
