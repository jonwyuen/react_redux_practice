import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  addTodo(todo) {
    this.props.addTodo(todo);
  }

  editTodo(id, todo) {
    this.props.editTodo(id, todo);
  }

  render() {
    const todos = this.props.todos.map(todo => (
      <Todo
        todo={todo.todo}
        id={todo.id}
        key={todo.id}
        removeTodo={this.removeTodo}
        editTodo={this.editTodo}
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
  { addTodo, removeTodo, editTodo }
)(TodoList);
