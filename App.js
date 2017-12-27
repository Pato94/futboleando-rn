import React, { Component } from 'react'
// this will be used to make your Android hardware Back Button work
import { Platform, BackHandler } from 'react-native'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
// this is your root-most navigation stack that can nest
// as many stacks as you want inside it
import { NavigationStack } from './src/navigation/nav_reducer'
import store from './src/store'

class App extends Component {
    componentWillMount() {
        if (Platform.OS !== 'android') return
        BackHandler.addEventListener('hardwareBackPress', () => {
          const {nav, dispatch} = this.props;

          if (nav && nav.routes && nav.routes.length > 1) {
            dispatch(NavigationActions.back());
            return true;
          }
          return false;
        })
    }

    // when the app is closed, remove the event listener
    componentWillUnmount() {
        if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress')
    }

    render() {
        // slap the navigation helpers on (critical step)
        const { dispatch, nav } = this.props
        const navigation = addNavigationHelpers({
            dispatch,
            state: nav
        })
        return <NavigationStack navigation={navigation} />
    }
}

const mapStateToProps = ({ nav }) => ({ nav })
const RootNavigationStack = connect(mapStateToProps)(App)

export default Root = () => (
    <Provider store={store}>
        <RootNavigationStack />
    </Provider>
)
