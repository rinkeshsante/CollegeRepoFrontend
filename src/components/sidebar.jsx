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
          <NavLink
            className="list-group-item list-group-item-action"
            to="/reports"
          >
            Reports
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/departments"
          >
            Departments
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/labs"
          >
            Labs
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/computers"
          >
            Computers
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/equipments"
          >
            Equipments
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action"
            to="/software"
          >
            Software
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Sidebar;
