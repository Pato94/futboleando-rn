import { Splash, Login, MatchesList, MatchForm, MatchDetail } from '../containers'
import { StackNavigator, NavigationActions } from 'react-navigation'
import { Constants } from 'expo'

const LoggedInStack = StackNavigator({
  MainScreen: {
    screen: MatchesList
  },
  MatchForm: {
    screen: MatchForm
  },
  Detail: {
    screen: MatchDetail
  }
}, {
    initialRouteName: 'MainScreen',
    navigationOptions: {
      headerStyle: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#50ad4c'
      },
      headerTintColor: 'white'
    }
})

export const NavigationStack = StackNavigator({
  Main: {
    screen: LoggedInStack
  },
  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
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
