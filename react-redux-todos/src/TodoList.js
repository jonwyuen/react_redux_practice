import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Sleep", "Code"]
    };
  }

  render() {
    const todos = this.state.todos.map(todo => <li>{todo}</li>)
    return(
      <div>{todos}</div>
    )
  }
}

export default TodoList;