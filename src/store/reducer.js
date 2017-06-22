export const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {

  let newTodos

  switch (action.type) {
    case 'ADD_TODO':
      newTodos = [...state.todos, action.payload.todo]
      return { todos: newTodos }
    case 'DELETE_TODO':
      newTodos = [...state.todos]
      newTodos.splice(action.payload.index, 1)
      return { todos: newTodos }
    default:
      return state
  }
}

export default reducer
