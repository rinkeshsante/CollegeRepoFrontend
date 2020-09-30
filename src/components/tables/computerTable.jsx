import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class ComputerTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "computers/"}
        table_name="Computers"
        column_name={["id", "name", "Computer_no", "ram", "storage"]}
      />
    );
  }
}

export default ComputerTable;
