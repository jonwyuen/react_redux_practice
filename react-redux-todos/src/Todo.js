import React, { Component } from "react";
import EditTodoForm from "./EditTodoForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  toggleEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo}
          <button onClick={this.toggleEditForm}>Edit</button>
          <button
            style={{ color: "red", marginLeft: "10px" }}
            onClick={this.handleDelete}
          >
            X
          </button>
        </li>
        {this.state.showEditForm ? (
          <EditTodoForm
            todo={this.props.todo}
            id={this.props.id}
            handleEdit={this.props.editTodo}
          />
        ) : null}
      </div>
    );
  }
}

export default Todo;
