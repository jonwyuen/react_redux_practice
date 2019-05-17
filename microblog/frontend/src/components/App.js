import React from "react";
import "./App.css";
import Post from "../containers/Post";
import NewPost from "../containers/NewPost";
import Home from "./Home";
import { NavLink, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App container jumbotron mt-2">
      <header className="App-header">
        <h1>Microblog</h1>
        <nav>
          <NavLink exact to="/">
            Blog
          </NavLink>
          <NavLink exact to="/new">
            Add a new post
          </NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/new" render={props => <NewPost {...props} />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/:postId" render={props => <Post {...props} />} />
      </Switch>
    </div>
  );
};

export default App;
