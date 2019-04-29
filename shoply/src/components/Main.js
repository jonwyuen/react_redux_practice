import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CartContainer from "../containers/CartContainer";
import ItemList from "./ItemList";

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={ItemList} />
      <Route path="/cart" component={CartContainer} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Main;
