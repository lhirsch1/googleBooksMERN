import React from "react";

//creating functional component Form to handle user input
//takes in props
  //q for user query
  //method handleInputChange to update state of inputs
  //handleFormSubmit to update the state and perform API call to search for book
function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        {/* title input  */}
        <input
          className="form-control"
          id="Title"
          type="text"
          // takes user query
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        {/* button for submitting form  */}
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}
//export Form component
export default Form;
