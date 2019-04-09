import { ADD_TODO, REMOVE_TODO, EDIT_TODO } from "./actionCreators";

const INITIAL_STATE = {
  todos: [],
  id: 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [...newState.todos, { todo: action.todo, id: newState.id }]
      };
    case REMOVE_TODO:
      let todos = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos };
    case EDIT_TODO:
      let updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) todo.todo = action.payload.todo;
        return todo;
      });
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};

export default rootReducer;
