import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ExportCSV from "./exportCsv";
import Home from "./home";
import NotFound from "./notFound";
import DepartmentTable from "./tables/departmentTable";

export class Main extends Component {
  render() {
    return (
      <div className="col-md-8 order-md-2 ">
        <Switch>
          <Route path="/departments" component={DepartmentTable}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/reports" component={ExportCSV}></Route>
          <Route path="/not-found" component={NotFound}></Route>

          <Redirect path="/" exact to="/home"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default Main;
