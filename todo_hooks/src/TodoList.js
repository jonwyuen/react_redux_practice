import React, { Fragment } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  return (
    <Fragment>
      {todos.length ? (
        <Paper>
          <List>
            {todos.map((todo, idx) => (
              <Fragment key={todo.id}>
                <Todo
                  {...todo}
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
                {idx < todos.length - 1 && <Divider />}
              </Fragment>
            ))}
          </List>
        </Paper>
      ) : null}
    </Fragment>
  );
};

export default TodoList;
