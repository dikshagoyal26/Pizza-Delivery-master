import React from "react";

const Input = props => {
  return (
    <div className="form-group ">
      <div
        className={
          "input-group " + (props.error ? " has-error" : "has-success")
        }
      >
        <label className="mr-2 form-label control-label">{props.label}</label>

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
      </div>
      {props.error ? (
        <small className="text-danger px-2 text-small">
          {" "}
          <i className="fas fa-exclamation-triangle"> </i>
          {"  "}
          {props.error}
        </small>
      ) : null}
    </div>
  );
};

export default Input;
