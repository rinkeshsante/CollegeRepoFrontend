import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class LabTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "labs/"}
        table_name="Lab"
        column_name={["id", "name", "lab_number", "code"]}
      />
    );
  }
}

export default LabTable;
