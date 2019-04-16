import { ADD_TODO, REMOVE_TODO, EDIT_TODO, GET_TODOS } from "./actionCreators";

const INITIAL_STATE = {
  todos: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      // with mongo, use _id instead of id
      let todos = state.todos.filter(todo => todo._id !== action.id);
      return { ...state, todos };
    case EDIT_TODO:
      let updatedTodos = state.todos.map(todo => {
        if (todo._id === action.payload.id) todo.todo = action.payload.todo;
        return todo;
      });
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};

export default rootReducer;
