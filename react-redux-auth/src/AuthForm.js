import React, { Component } from "react";
import { connect } from "react-redux";
import { signup, login } from "./actions";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: props.location.pathname === "/signup" ? "signup" : "login"
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
    const { username, password, formType } = this.state;
    e.preventDefault();
    if (formType === "signup") {
      this.props
        .signup({ username, password })
        .then(() => {
          // arrow fn to correctly bind this to this.props.history.push
          this.props.history.push("/login");
        })
        .catch(err => console.log(err));
    } else {
      this.props
        .login({ username, password })
        .then(() => {
          this.props.history.push("/welcome");
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { username, password, formType } = this.state;
    const formText = formType === "signup" ? "Sign Up" : "Log In";
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit}>
            <h1>{formText}</h1>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">{formText}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    null,
    { signup, login }
  )(AuthForm)
);
