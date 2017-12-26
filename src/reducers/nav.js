import { AppNavigator } from '../app'

const loginAction = AppNavigator.router.getActionForPathAndParams('Login')

const initialState = AppNavigator.router.getStateForAction(loginAction)

const reducer = (state = initialState, action) =>
  AppNavigator.router.getStateForAction(action, state)

export default reducer
