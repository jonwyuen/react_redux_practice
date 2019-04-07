import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo}
          <span
            style={{ color: "red", marginLeft: "10px" }}
            onClick={this.handleDelete}
          >
            X
          </span>
        </li>
      </div>
    );
  }
}

export default Todo;
