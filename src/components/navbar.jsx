import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="border-bottom m-2">
        {/* <div className="collapse navbar-collapse"> */}
        <div className="navbar-nav">
          <h1>Department Repository</h1>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default Navbar;
