// davezuko/react-redux-starter-kit
// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/store/createStore.js

import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import reducer, { initialState } from './reducer'

const createStore = () => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = []

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const reducers = require('./reducer').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
