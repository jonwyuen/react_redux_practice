import React, { Component } from "react";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.handleEdit(this.props.id, this.state.todo);
    this.setState({
      todo: this.props.todo
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button onClick={this.handleEdit}>Update Todo</button>
        </form>
      </div>
    );
  }
}

export default EditTodoForm;
