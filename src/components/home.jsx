import React, { Component } from "react";
import Modal from "./common/modal";
import TestDep from "./testDep";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Modal buttonName="about" modalId="small" header="head">
          <h1> i am children</h1>
        </Modal>
        <h2>testing page</h2>
        <TestDep></TestDep>
      </div>
    );
  }
}

export default Home;
