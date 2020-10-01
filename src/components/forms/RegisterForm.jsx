import React, { Component } from "react";

class RegisterForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register/Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
