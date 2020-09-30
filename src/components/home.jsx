import React, { Component } from "react";
import Table from "./common/table";
import { ApiEndpoint } from "../config.json";
import MoreOption from "./common/moreOption";
import MyModal from "./common/myModal";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <MyModal>
          <h1>hi</h1>
        </MyModal>
      </div>
    );
  }
}

export default Home;
