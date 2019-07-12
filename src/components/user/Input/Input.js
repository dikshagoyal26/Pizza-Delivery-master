import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <div className="input-group">
        <label className="mr-2">{props.label}</label>

        {props.title ? (
          <div className="input-group-prepend">
            <span className="input-group-text">{props.title}</span>
          </div>
        ) : null}
        <input
          className="form-control"
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
          maxLength={props.maxlength}
          minLength={props.minlength}
          size={props.size}
          required={props.required}
          pattern={props.pattern}
        />
        <span>{props.error}</span>
      </div>
    </div>
  );
};

export default Input;
