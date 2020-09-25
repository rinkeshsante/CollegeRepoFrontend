import React, { Component } from "react";
import axios from "axios";
import CsvDownload from "react-json-to-csv";

import { ApiEndpoint } from "../../config.json";
const BASE_URL = ApiEndpoint + "departments/";

export class DepartmentTable extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);

    // refresh every 5 sec
  }

  getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      this.setState({
        isLoaded: true,
        items: data,
      });
    } catch (ex) {
      if (ex.respose && ex.respose.status === 400) alert("data don't exist");
      else alert("unexpected error");
    }

    console.log("data refreshed");
  };

  render() {
    if (!this.state.isLoaded) return <h2>loading....</h2>;

    const filename = this.getFileName();

    return (
      <div>
        <h1>
          Department list
          <CsvDownload
            data={[...this.state.items]}
            filename={filename}
            className="btn badge-info"
          >
            DownLoad csv
          </CsvDownload>
        </h1>
        <ul>
          {this.state.items.map((detail) => (
            <li key={detail.id}>
              <cite title="Source Title ">
                {detail.id} ){detail.name}
              </cite>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  getFileName() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    return (
      "dep " +
      date +
      " at " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ".csv"
    );
  }
}

export default DepartmentTable;
