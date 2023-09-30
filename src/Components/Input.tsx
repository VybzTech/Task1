import React from "react";
type InputProps = {
  name: string;
  label: string;
  placeholder: string;
};
const Input = (props: InputProps) => {
  return (
    <div className="formControl">
      <div>
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type="text"
          placeholder={props.placeholder}
          name={props.name}
          id={props.name}
        />
      </div>
    </div>
  );
};

export default Input;
