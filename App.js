import React from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import { MatchsList, Login } from './src/containers'

class App extends React.Component {
  render() {
    return <Login />
  }
}

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWithStore
