import React from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import { default as App } from './src/app'

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWithStore
