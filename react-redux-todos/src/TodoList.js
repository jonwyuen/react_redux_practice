import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  addTodo(todo) {
    this.props.addTodo(todo);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo
        todo={todo.task}
        id={todo.id}
        key={todo.id}
        removeTodo={this.removeTodo}
      />
    ));
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
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
