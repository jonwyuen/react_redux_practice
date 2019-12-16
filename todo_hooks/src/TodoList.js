import React, { Fragment } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Fragment key={todo.id}>
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
