import React from "react";
import { Route, Switch } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </Switch>
    </div>
  );
};

export default App;
