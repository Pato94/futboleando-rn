import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../app'

const initialState = {}

const reducer = (state = initialState, action) => {
  console.log(action)
  if (action.type === 'LOGIN_CLICK') {
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'Home' })
    )
  }
  return state
}

export default reducer
