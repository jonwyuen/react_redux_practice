export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const editTodo = (id, todo) => {
  return {
    type: EDIT_TODO,
    payload: { id, todo }
  };
};
