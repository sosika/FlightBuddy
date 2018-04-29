import React, { Component } from "react";
import Form from "../components/Form/form";
import TailView from "../components/TailView/tailview";
import API from "../API.js";
import axios from "axios";

export default class Tail extends Component {
  state = {
    plane: {},
    result: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getPlanes = () => {
    API.getPlanes({
      plane: this.state.plane,
    })
      .then(res => this.setState({
          plaes: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getPlanes();
  };

// Do we need this?
  componentDidMount() {
    axios.get("/api/planes")
    .then( (data) => this.setState({data}))
  };

  render() {
    return (
        <div>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
    )
  }
};
