import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { removeTodo } from "./actions";

const TodoListContainer = ({ todos, deleteTodo }) => (
  <div>
    <h1>Todos</h1>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { removeTodo }
)(TodoListContainer);
