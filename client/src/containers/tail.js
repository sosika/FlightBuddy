import React, { Component } from "react";
import Form from "../components/Form/form";
import TailView from "../components/TailView";
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

  grabAllPlanes = () => {
    API.grabAllPlanes({
      plane: this.state.plane
    })
    .then(response => this.setState({
      plane: response.data
    })
    )
    .catch(err => console.log("this is an error coming back: ", err))
  }

  // getPlanes = () => {
  //   API.getPlanes({
  //     plane: this.state.plane,
  //   })
  //     .then(res => this.setState({
  //       plane: res.data,
  //       })
  //     )
  //     .catch(err => console.log("this is an error coming back: ", err));
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getPlanes();
  };

// Do we need this?
  componentDidMount() {
    axios.get("/api/planes")
    .then( (res) => this.setState({plane: res.data}))
  };

  render() {
    return (
        <div>
          <div>
          <TailView planes={this.state.plane}/>
          </div>
          <br></br>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
    )
  }
};
