// davezuko/react-redux-starter-kit
// https://github.com/davezuko/react-redux-starter-kit/blob/master/src/main.js

import React            from 'react'
import ReactDOM         from 'react-dom'
import createStore      from './store/createStore'
import { initialState } from './store/reducer'

const store = createStore(initialState)

const MOUNT_NODE = document.getElementById('app')

let render = () => {
  const App = require('./components/App').default

  ReactDOM.render(
    <App store={ store } />,
    MOUNT_NODE
  )
}

// Developmental settings
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) {
  render()
}
