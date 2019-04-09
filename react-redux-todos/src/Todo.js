import React, { Component } from "react";
import EditForm from "./EditForm";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete() {
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.setState({
      showEditForm: !this.state.showEditForm
    });
  }

  render() {
    return (
      <div>
        <li>
          {this.props.todo}
          <button onClick={this.handleEdit}>Edit</button>
          <button
            style={{ color: "red", marginLeft: "10px" }}
            onClick={this.handleDelete}
          >
            X
          </button>
        </li>
        {this.state.showEditForm ? <EditForm todo={this.props.todo} /> : null}
      </div>
    );
  }
}

export default Todo;
