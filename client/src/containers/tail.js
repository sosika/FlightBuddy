import React, { Component } from "react";
import Form from "../components/Form/form";
import TailView from "../components/TailView/tailview";
import API from "../API.js";
// import axios from "axios";

export default class Tail extends Component {
  state = {
    plane: "",
    metrics: [{}]
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  getMetrics = () => {
    API.getPlanes(this.state.plane)
      .then(res => {
        console.log('res',res)
        this.setState({
          metrics: res.data
        })
        console.log('metrics', this.state.metrics)
      }
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getMetrics();
  };

// Do we need this?
  // componentDidMount() {
  //   axios.get("/api/planes")
  //   .then( (data) => this.setState({data}))
  // };

  render() {
    return (
        <div>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            plane={this.state.plane}
          />
          <TailView metrics={this.state.metrics} />
        </div>
    )
  }
};
