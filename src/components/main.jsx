import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./home";
import NotFound from "./notFound";
import TestDep from "./testDep";

export class Main extends Component {
  render() {
    return (
      <div className="col-md-8 order-md-2 ">
        <Switch>
          <Route path="/dep" component={TestDep}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/not-found" component={NotFound}></Route>

          <Redirect path="/" exact to="/home"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default Main;
