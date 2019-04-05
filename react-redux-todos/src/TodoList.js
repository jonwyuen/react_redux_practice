import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos.map((todo, idx) => (
      <Todo todo={todo} key={idx} />
    ));
    return (
      <div>
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
