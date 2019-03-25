import React from 'react';

const Input = (props) => {
    return (  
  <div>
    <label htmlFor={props.name} className="form-label mt-1 mb-0">{props.title}</label>
    <input
      className= "form-control"
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
      pattern={props.pattern}
    />
  </div>
)
}

export default Input;