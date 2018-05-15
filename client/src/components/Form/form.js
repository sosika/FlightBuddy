import React from "react";
import { Row, Col } from 'react-materialize'
import "./Form.css"

const Form = props => (
  // form action should go to charts/graphs page
  <Row>
    <Col m={6} offset="m1">
  <form action="">
    <div className="form-group">
      <label htmlFor="Tail">
        <strong>Aircraft Tail-Number</strong>
      </label>
      <input
        className="form-control"
        id="tail"
        type="text"
        placeholder="Type a tail-number to search metrics:"
        // value={{}}
        name="plane"
        onChange={props.handleInputChange}
        required
      />
    <div className="pull-right grey">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-primary grey"
        // redirectTo={view}
      >
        Submit
      </button>
    </div>
    </div>
  </form>
  </Col>
  </Row>
);

export default Form;
