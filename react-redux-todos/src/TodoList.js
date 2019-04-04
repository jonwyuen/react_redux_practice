import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Eat", "Sleep", "Code"]
    };
  }

  render() {
    const todos = this.state.todos.map((todo, idx) => <Todo todo={todo} key={idx} />)
    return(
      <div>
        <ul>{todos}</ul>
      </div>
    )
  }
}

export default TodoList;