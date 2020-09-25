import React, { Component } from "react";
import Modal from "./common/modal";

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Modal buttonName="about" modalId="small" header="head">
          <h1> i am children</h1>
        </Modal>
      </div>
    );
  }
}

export default Home;
