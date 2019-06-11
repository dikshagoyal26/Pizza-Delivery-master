import React from "react";
const Select = props => {
  return (
    <div className="form-group">
      <div className="input-group">
        <label htmlFor={props.name} className=" mr-2">
          {props.label}
        </label>
        <select
          name={props.name}
          onChange={props.handleChange}
          className="form-control"
          value={props.value}
        >
          <option value="" disabled>
            {props.placeholder}
          </option>

          {props.options.map(option => {
            return (
              <option key={option} value={option} label={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
