import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { removeTodo } from "./actionCreators";

const TodoListContainer = ({ todos, removeTodo }) => (
  <div>
    <h1>Todos</h1>
    <TodoList todos={todos} removeTodo={removeTodo} />
  </div>
);

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { removeTodo }
)(TodoListContainer);
