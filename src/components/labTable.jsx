import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/labs/";

export class LabTable extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);

    // refresh every 5 sec
  }

  getData = () => {
    axios
      .get(BASE_URL)
      .then((response) =>
        this.setState({
          isLoaded: true,
          items: response.data,
        })
      )
      .catch((error) => console.log(error));
    console.log("data refreshed");
  };

  render() {
    if (!this.state.isLoaded) return <h2>loading....</h2>;
    return (
      <div>
        <h1 className="badge-primary">Lab list</h1>
        <ul>
          {this.state.items.map((detail) => (
            <li key={detail.id}>
              <cite title="Source Title ">
                {detail.id} ){detail.name} ,{detail.department}
              </cite>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LabTable;
