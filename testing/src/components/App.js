import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { changeAuth } from "actions";

class App extends Component {
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderAuthButton()}</li>
      </ul>
    );
  }

  renderAuthButton() {
    return this.props.auth ? (
      <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    ) : (
      <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Switch>
          <Route path="/" exact component={CommentList} />
          <Route path="/post" component={CommentBox} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
