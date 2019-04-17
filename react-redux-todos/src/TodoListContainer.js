import React, { Component } from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { removeTodo, getTodos } from "./actionCreators";

class TodoListContainer extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, removeTodo } = this.props;
    return (
      <div>
        <h1>Todos</h1>
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });

export default connect(
  mapStateToProps,
  { removeTodo, getTodos }
)(TodoListContainer);
