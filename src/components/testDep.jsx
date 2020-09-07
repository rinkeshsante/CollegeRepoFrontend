import React, { Component } from "react";
import axios from "axios";
export class TestDep extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    let data;

    axios
      .get("http://127.0.0.1:8000/api/departemnts/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        <h1 className="badge-primary">Department list</h1>
        <ul>
          {this.state.details.map((detail, id) => (
            <li>
              <cite title="Source Title">{detail.name}</cite>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestDep;
