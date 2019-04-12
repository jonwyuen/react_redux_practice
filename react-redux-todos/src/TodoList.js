import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  const noTodosMessage = <p>No current todos...</p>;

  const todosList = (
    <div>
      {todos.map(todo => (
        <Todo
          task={todo.task}
          id={todo.id}
          key={todo.id}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );

  return <div>{todos.length === 0 ? noTodosMessage : todosList}</div>;
};

export default TodoList;
