import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, todo) {
    e.preventDefault();
    this.props.addTodo(todo);
  }

  render() {
    const todos = this.props.todos.map((todo, idx) => (
      <Todo todo={todo} key={idx} />
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
