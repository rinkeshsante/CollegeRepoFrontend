import React, { Component } from "react";

import { ApiEndpoint } from "../../config.json";
import Table from "../common/table";
export class EquipmentTable extends Component {
  render() {
    return (
      <Table
        BASE_URL={ApiEndpoint + "equipments/"}
        table_name="Equipment"
        column_name={["id", "name", "equipment_no", "code"]}
      />
    );
  }
}

export default EquipmentTable;
