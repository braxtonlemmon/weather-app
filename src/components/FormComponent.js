import React from 'react';

const FormComponent = (props) => {
  return (
    <div className="form-container">
      <form className="search-form">
        <h2 className="search-title">Find weather</h2>
        <label htmlFor="location">Location</label>
        <input
          placeholder="Location"
          type="text"
          name="location"
          id="location"
          minLength="2"
          required
          value={props.data.location}
          onChange={props.handleChange}
        />
        <button
          className="search-button"
          onClick={props.handleSubmit}
        >Search</button>
      </form>
    </div>
  )
}

export default FormComponent;