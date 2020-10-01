import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class PurchaseTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "purchases/"}
        table_name="Purchase"
        column_name={["id", "bill_no", "supplier", "rate"]}
      />
    );
  }
}

export default PurchaseTable;
