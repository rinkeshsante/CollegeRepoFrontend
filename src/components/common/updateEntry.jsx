import React, { Component } from "react";
import axios from "axios";

export class UpdateEntry extends Component {
  state = {};

  componentDidMount() {
    this.setState(this.props.data);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(this.props.BASE_URL + this.state.id + "/", this.state)
      .catch((err) => {
        console.log(err);
        alert("data don't exist!");
      });

    console.log(this.state);
  };

  render() {
    const { header = "", data = {}, column_name = [] } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        <form onSubmit={this.handleSubmit}>
          {Object.entries(column_name).map(([key, value]) => {
            if (key !== "id")
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

export default UpdateEntry;
