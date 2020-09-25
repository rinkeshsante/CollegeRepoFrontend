import React, { Component } from "react";
import { ApiEndpoint } from "../config.json";
import axios from "axios";
import Modal from "./common/modal";

const BASE_URL = ApiEndpoint;
export class TestDep extends Component {
  state = {
    items: [],
    isLoaded: false,
  };

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 5000);

    // refresh every 5 sec
  }

  getData = async () => {
    try {
      const { data } = await axios.get(BASE_URL);
      this.setState({
        isLoaded: true,
        items: data,
      });
    } catch (ex) {
      if (ex.respose && ex.respose.status === 400) alert("data don't exist");
      else alert("unexpected error");
    }

    console.log("data refreshed");
  };

  render() {
    if (!this.state.isLoaded) return <h2>loading....</h2>;

    return (
      <div>
        <h1>Department list</h1>
        <ul>
          {this.state.items.map((detail) => (
            <li key={detail.id}>
              <cite title="Source Title ">
                {detail.id} ){detail.name}
              </cite>
            </li>
          ))}
        </ul>
        <TestForm></TestForm>

        <Modal buttonName="deleteform" modalId="delModal">
          <DeleteForm></DeleteForm>
        </Modal>

        <UpdateForm></UpdateForm>
      </div>
    );
  }
}

export class TestForm extends Component {
  state = { name: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post(BASE_URL, this.state).catch((err) => {
      console.log(err);
    });
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">save</button>
        </form>
      </div>
    );
  }
}

export class DeleteForm extends Component {
  state = {
    id: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A delete id no : " + this.state.id);
    event.preventDefault();

    axios.delete(BASE_URL + this.state.id + "/").catch((err) => {
      alert("data don't exist!");
      console.log(err);
    });

    this.setState({ id: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          id:
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">delete</button>
      </form>
    );
  }
}

class UpdateForm extends Component {
  state = { name: "", id: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("update :" + this.state.name + " at id: " + this.state.id);

    console.log({ name: this.state.name });

    axios
      .patch(BASE_URL + this.state.id + "/", { name: this.state.name })
      .catch((err) => {
        console.log(err);
        alert("data don't exist!");
      });

    this.setState({
      id: "",
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          id:
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">update</button>
      </form>
    );
  }
}

export default TestDep;
