import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./actions";

class NavigationBar extends Component {
  logout() {
    this.props.logout();
  }

  render() {
    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link onClick={this.logout.bind(this)}>Logout</Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Auth App
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            {this.props.isAuthenticated ? userLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);
