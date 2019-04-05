import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.removeTodo(id);
  }

  handleSubmit(todo) {
    this.props.addTodo(todo);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo
        todo={todo.task}
        id={todo.id}
        key={todo.id}
        handleDelete={this.handleDelete}
      />
    ));
    return (
      <div>
        <TodoForm handleSubmit={this.handleSubmit} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(TodoList);
