import React, { Component } from "react";
import TailView from "../components/TailView/tailview";
import axios from "axios";

class Tail extends Component {
  state = {
    tail: {}
  };

  componentDidMount() {
    axios.get("/api/tail")
    .then( (data) => (
      this.setState({data})
    ))
  };

  render() {
    const {tail} = this.state;
    if ( Object.keys(tail).length === 0 ) {
      return <div>Loading...</div>
    };
    return<TailView planes={tail} />
  }
};

export default Tail;
