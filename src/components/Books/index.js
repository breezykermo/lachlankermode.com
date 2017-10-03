import React from 'react'
import App from './App'
import './static/index.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(thunk))

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
