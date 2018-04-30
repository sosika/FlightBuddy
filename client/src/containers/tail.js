import React, { Component } from "react";
import Form from "../components/Form/form";
import TailView from "../components/TailView";
import API from "../API.js";
import axios from "axios";

export default class Tail extends Component {
  state = {
    plane: "",
    metrics: [{}]
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      plane: value
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
  // grabAllPlanes function working
  
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

// Do we need this? --keep this for now
  componentDidMount() {
    axios.get("/api/planes")
    .then( (res) => this.setState({plane: res.data}))
  };


  render() {
    return (
        <div>
          <div>
          <TailView planes={this.state.plane} metrics={this.state.metrics}/>
          </div>
          <br></br>
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            plane={this.state.plane}
          />
        </div>
    )
  }
};
