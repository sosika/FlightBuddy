import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <label htmlFor="Tail">
        <strong>TailNumber</strong>
      </label>
      <input
        className="form-control"
        id="tail"
        type="text"
        placeholder="Type a tail-number to search:"
        // value={{}}
        name="plane"
        onChange={props.handleInputChange}
        required
      />
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
        // redirectTo={view}
      >
        Submit
      </button>
    </div>
    </div>
  </form>
);

export default Form;
