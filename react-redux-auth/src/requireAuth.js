import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const requireAuth = ComponentToBeRendered => {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) this.props.history.push("login");
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) this.props.history.push("login");
    }

    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.isAuthenticated
    };
  };

  return withRouter(connect(mapStateToProps)(Authenticate));
};

export default requireAuth;
