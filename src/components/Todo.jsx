import React       from 'react'
import { Provider } from 'react-redux'
import PropTypes   from 'prop-types'

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add      : text                 => dispatch({ type: 'ADD_TODO',    payload: { todo: { text } } }),
    markDone : (index, done = true) => dispatch({ type: 'MARK_DONE',   payload: { index, done } }),
    remove   : index                => dispatch({ type: 'REMOVE_TODO', payload: { index } }),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.PureComponent {

  static propTypes = {
    todos    : PropTypes.array,
    add      : PropTypes.func.isRequired,
    markDone : PropTypes.func.isRequired,
    remove   : PropTypes.func.isRequired,
  }

  static defaultProps = {
    todos : [],
  }

  render() {

    const {
      todos,
      add,
      markDone,
      remove,
    } = this.props

      return (
        <div>
          <h1>{ 'Hello, WReact!' }</h1>
          <ul className={ 'todo-items' }>
            {
              todos.map((todo, index) => {
                return (
                  <li
                    key={ `todo-${index}` }
                    className={ 'todo-item' }
                  >
                    <span className={ 'todo-content' }>{ todo }</span>
                    <button
                      className={ 'button button-mark' }
                      onClick={ () => markDone(index) }
                    >
                      { 'done' }
                    </button>
                    <button
                      className={ 'button button-add' }
                      onClick={ () => remove(index) }
                    >{ 'delete' }</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
  }
}
