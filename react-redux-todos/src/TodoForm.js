import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo ? props.todo : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.match.params.id;
    if (id) this.props.editTodo(id, this.state.todo);
    else this.props.addTodo(this.state.todo);
    e.target.reset();
    this.props.history.push("/todos");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Todo</label>
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={this.handleChange}
          />
          <button>Save Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
