import React       from 'react'
import { Provider } from 'react-redux'
import PropTypes   from 'prop-types'

export default class App extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {

      return (
        <Provider store={ this.props.store }>
          <div style={ { height: '100%' } }>
            <h1>{ 'Hello, WReact!' }</h1>
          </div>
        </Provider>
      )
  }
}
