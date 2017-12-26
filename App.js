import React from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import { MatchsList } from './src/containers'

class App extends React.Component {
  render() {
    return <MatchsList />
  }
}

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWithStore
