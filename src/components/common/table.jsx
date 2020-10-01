import React, { Component } from "react";
import CsvDownload from "react-json-to-csv";
import http from "../../services/httpService";
import logger from "../../services/logService";
import createCSV from "../../services/createCSV";
import MyModal from "./myModal";
import DetailView from "./detailView";
import DeleteEntry from "./deleteEntry";
export class Table extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const { data } = await http.get(this.props.BASE_URL);
    this.setState({
      isLoaded: true,
      items: data,
    });
  }

  handleUpdate = async (data) => {
    http.patch(this.props.BASE_URL + data.id + "/", data).catch((err) => {
      logger.log(err);
      alert("data don't exist!");
    });

    const items = [...this.state.items];
    const index = items.indexOf(data);
    items[index] = { ...data };
    this.setState({ items });
  };

  handleDelete = async (data) => {
    // saving original state in chase of failure
    const original = this.state.items;

    const items = this.state.items.filter((p) => p.id !== data.id);
    this.setState({ items });

    try {
      await http.delete(this.props.BASE_URL + data.id + "/");
    } catch (er) {
      if (er.respose && er.respose.status === 400)
        alert("item dosen't exist in server");
      this.setState({ items: original });
    }
  };

  handleAdd = async (data) => {
    const { data: post } = await http.post(this.props.BASE_URL, data);

    const items = [...this.state.items, post];
    this.setState({ items });
  };

  render() {
    if (!this.state.isLoaded) return <h2>loading....</h2>;

    const { table_name, column_name } = this.props;
    // const filename = this.getFileName(table_name);

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="navbar-brand">{table_name} Table</div>

          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <button className="nav-link btn btn-link">New</button>
            </li>
            <li class="nav-item">
              <CsvDownload
                data={this.state.items}
                filename={createCSV.getFileName(table_name)}
                className="nav-link btn btn-link"
              >
                Download csv
              </CsvDownload>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>

        <table className="table  table-bordered">
          <thead className="thead-light">
            <tr>
              {column_name.map((name) => (
                <th>{name}</th>
              ))}
              <th>more</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((detail) => (
              <tr>
                {column_name.map((name) => (
                  <td>{detail[name]}</td>
                ))}
                <td>
                  <MyModal header={detail.name}>
                    <DetailView data={detail}>
                      <button onClick={() => this.handleDelete(detail)}>
                        delete
                      </button>
                    </DetailView>
                  </MyModal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
