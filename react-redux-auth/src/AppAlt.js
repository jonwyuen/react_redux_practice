import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "./AuthForm";
import Welcome from "./Welcome";
import NavigationBar from "./NavigationBar";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <PublicRoute
              isAuthenticated={isAuthenticated}
              path="/login"
              component={AuthForm}
            />
            <PublicRoute
              isAuthenticated={isAuthenticated}
              path="/signup"
              component={AuthForm}
            />
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              path="/welcome"
              component={Welcome}
            />
            <Route render={() => <h3>No Match...</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);
