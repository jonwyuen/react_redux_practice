import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const TodoList = ({ todos }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <>
            <Todo key={todo.id} task={todo.task} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
