import React, { Component } from "react";

import axios from "axios";

export class CreateEntry extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post(this.props.BASE_URL, this.state).catch((err) => {
      console.log(err);
    });

    console.log(this.state);
  };

  render() {
    const { header = "", column_name = {} } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        <form onSubmit={this.handleSubmit}>
          {Object.entries(column_name).map(([key, value]) => {
            return (
              <div>
                <label>
                  {key}:
                  <input
                    type={value.toString()}
                    name={key}
                    value={this.state[key]}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
            );
          })}

          <button type="submit">save</button>
        </form>
      </div>
    );
  }
}

export default CreateEntry;
