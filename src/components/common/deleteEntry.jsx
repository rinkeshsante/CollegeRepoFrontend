import React, { Component } from "react";
import axios from "axios";

export class DeleteEntry extends Component {
  state = {};

  componentDidMount() {
    this.setState(this.props.data);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A delete id no : " + this.state.id);
    event.preventDefault();

    axios.delete(this.props.BASE_URL + this.state.id + "/").catch((err) => {
      alert("data don't exist!");
      console.log(err);
    });

    this.setState({ id: "" });
  };

  render() {
    const { header = "", data = {} } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        <form onSubmit={this.handleSubmit}>
          <h2>do you wanna delete at id: {this.state.id} ?</h2>
          <button type="submit">delete</button>
        </form>
      </div>
    );
  }
}

export default DeleteEntry;
