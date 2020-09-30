import React, { Component } from "react";
import axios from "axios";
import CsvDownload from "react-json-to-csv";

export class Table extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  async componentDidMount() {
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
  }

  handleUpdate = async (data) => {
    axios.patch(this.props.BASE_URL + data.id + "/", data).catch((err) => {
      console.log(err);
      alert("data don't exist!");
    });

    const items = [...this.state.items];
    const index = items.indexOf(data);
    items[index] = { ...data };
    this.setState({ items });
  };

  handleDelete = async (data) => {
    axios.delete(this.props.BASE_URL + this.state.id + "/").catch((err) => {
      alert("data don't exist!");
      console.log(err);
    });

    const items = this.state.items.filter((p) => p.id !== data.id);
    this.setState({ items });
  };

  handleAdd = async (data) => {
    const { data: post } = await axios.post(this.props.BASE_URL, data);

    const items = [...this.state.items, post];
    this.setState({ items });
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
