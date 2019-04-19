import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthForm from "./AuthForm";
import Welcome from "./Welcome";
import NavigationBar from "./NavigationBar";
import requireAuth from "./requireAuth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route path="/login" component={AuthForm} />
            <Route path="/signup" component={AuthForm} />
            <Route path="/welcome" component={requireAuth(Welcome)} />
            <Route render={() => <h3>No Match...</h3>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
