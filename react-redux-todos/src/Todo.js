import React, { Component } from "react";
import { Link } from "react-router-dom";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    const { todo, id } = this.props;
    return (
      <div>
        <li>
          {todo}
          <button>
            <Link to={`/todos/${id}/edit`}>Edit</Link>
          </button>
          <button
            style={{ color: "red", marginLeft: "10px" }}
            onClick={this.handleDelete}
          >
            X
          </button>
        </li>
      </div>
    );
  }
}

export default Todo;
