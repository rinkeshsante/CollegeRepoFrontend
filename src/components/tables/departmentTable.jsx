import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class DepartmentTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "departments/"}
        table_name="Department"
        column_name={["id", "name"]}
      />
    );
  }
}

export default DepartmentTable;
