import React, { Component } from "react";
import axios from "axios";
import CsvDownload from "react-json-to-csv";

export class Table extends Component {
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
      const { data } = await axios.get(this.props.BASE_URL);
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

    const { table_name, column_name } = this.props;
    const filename = this.getFileName(table_name);

    return (
      <div>
        <h2>
          {table_name} list
          <CsvDownload
            data={this.state.items}
            filename={filename}
            className="btn badge-info"
          >
            DownLoad csv
          </CsvDownload>
        </h2>
        <table className="table  table-bordered">
          <thead className="thead-light">
            <tr>
              {column_name.map((name) => (
                <th>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((detail) => (
              <tr>
                {column_name.map((name) => (
                  <td>{detail[name]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  getFileName(table_name) {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    return (
      table_name +
      " " +
      date +
      " at " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ".csv"
    );
  }
}

export default Table;
