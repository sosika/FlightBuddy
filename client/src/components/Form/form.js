import React from "react";
import "./Form.css"

const Form = props => (
  // form action should go to charts/graphs page
  <form action="/whatever/page">
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
);

export default Form;
