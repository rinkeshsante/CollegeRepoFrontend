import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class SoftwareTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "softwares/"}
        table_name="Software"
        column_name={["id", "name", "software_no", "code"]}
      />
    );
  }
}

export default SoftwareTable;
