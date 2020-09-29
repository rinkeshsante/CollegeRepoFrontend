import React, { Component } from "react";
import Modal from "./common/modal";
import Table from "./common/table";
import TestDep from "./testDep";
import { ApiEndpoint } from "../config.json";
import DetailView from "./common/detailView";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Table
          BASE_URL={ApiEndpoint + "departments/"}
          table_name="Department"
          cloumn_name={["id", "name"]}
        ></Table>
        <DetailView
          header="hse"
          data={{ name: "on", age: 90, point: 90.89 }}
        ></DetailView>
      </div>
    );
  }
}

export default Home;
