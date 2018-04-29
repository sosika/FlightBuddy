import React, { Component } from "react";
import TailView from "../components/TailView/TailView";
import axios from "axios";

class Tail extends Component {
  state = {
    tail: {}
  };

  componentDidMount() {
    axios.get("/api/planes")
    .then( (response) => (
      this.setState({tail: response.data})
    ))
  };

  render() {
    const {tail} = this.state;
    if ( Object.keys(tail).length === 0 ) {
      return <div>LOADING...</div>
    };
    return<TailView planes={this.state.tail} />
  }
};

export default Tail;
