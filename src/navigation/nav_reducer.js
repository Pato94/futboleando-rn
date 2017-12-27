import { Splash, Login, MatchesList, MatchForm } from '../containers'
import { StackNavigator, NavigationActions } from 'react-navigation'

const LoggedInStack = StackNavigator({
  MainScreen: {
    screen: MatchesList
  },
  MatchForm: {
    screen: MatchForm
  }
}, {
  headerMode: 'none'
})

export const NavigationStack = StackNavigator({
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  Main: {
    screen: LoggedInStack
  }
}, {
  headerMode: 'none'
})

const INITIAL_STATE = NavigationStack.router.getStateForAction(NavigationActions.init())

// this is pretty much a standard reducer, but it looks fancy
// all it cares about is "did the navigation stack change?"
// if yes => update the stack
// if no => pass current stack through
export default (state = INITIAL_STATE, action) => {
  const nextState = NavigationStack.router.getStateForAction(action, state)

  return nextState || state
}
