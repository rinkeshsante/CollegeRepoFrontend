import React, { Component } from "react";
import axios from "axios";

export class TestForm extends Component {
  state = {
    formFields: {},
  };
  // componentDidMount() {
  //   let data;
  //   axios
  //     .get("http://127.0.0.1:8000/api/departemnts/1")
  //     .then((res) => {
  //       data = res.data;
  //       this.setState({
  //         formFields: data.fields,
  //       });
  //     })
  //     .catch((err) => {});
  //   console.log(this.state);
  // }

  submitForm = () => {
    axios.post("http://127.0.0.1:8000/api/departemnts", {
      name: "ka1",
    });

    console.log("submit clicked");

    // axios
    //   .post("http://127.0.0.1:8000/api/departemnts/new")
    //   .then((res) => {
    //     data = res.data;
    //     this.setState({
    //       details: data,
    //     });
    //   })
    //   .catch((err) => {});
  };

  render() {
    return (
      <div className="container">
        hi
        <button onClick={this.submitForm}>Save</button>
      </div>
    );
  }
}

export default TestForm;
