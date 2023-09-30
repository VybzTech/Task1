import React from "react";
type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
};
const Fields = (props: FieldProps) => {
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

export default Fields;
