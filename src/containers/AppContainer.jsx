import React                     from 'react'
import { Provider }              from 'react-redux'
import App                       from '../components/App'
import { createStore }           from 'redux'
import reducer, { initialState } from '../reducers/index'

const store = createStore(reducer, initialState)

const AppContainer = () => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  )
}

export default AppContainer
