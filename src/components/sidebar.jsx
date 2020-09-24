import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-3 order-md-1 mb-4">
        <div class="list-group" id="list-tab" role="tablist">
          <NavLink
            className="list-group-item list-group-item-action "
            to="/home"
          >
            Home
          </NavLink>
          <NavLink className="list-group-item list-group-item-action" to="/dep">
            Departments
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/not-found"
          >
            nf
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Sidebar;
