import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.handleAuth();
    }

    // when component just got updated
    componentDidUpdate() {
      this.handleAuth();
    }

    handleAuth() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({ auth: state.auth });

  return connect(mapStateToProps)(ComposedComponent);
};
