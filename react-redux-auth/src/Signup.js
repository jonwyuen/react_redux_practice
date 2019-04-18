import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "./actions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    this.props
      .signUp(this.state)
      .then(() => {
        // arrow fn to correctly bind this to this.props.history.push
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  signUp: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    null,
    { signUp }
  )(Signup)
);
