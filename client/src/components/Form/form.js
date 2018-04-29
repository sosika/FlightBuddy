import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="Tail">
        <strong>Tail</strong>
      </label>
      <input
        className="form-control"
        id="tail"
        type="text"
        placeholder="Type tail to search"
        name="plane"
        onChange={props.handleInputChange}
        required
      />
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
    </div>
  </form>
);

export default Form;
