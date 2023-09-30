import React from "react";
import ContactOption from "./ContactOption";
type SelectProps = {
  label: string;
  action: JSX.Element;
  chLabel: string;
};
const Selects = (props: SelectProps) => {
  return (
    <div className="formControl">
      <div>
        <label htmlFor={props.label}>{props.label}</label>
        {props.action}
        <input type="checkbox" name={props.label} id={props.label} />
        <span>{props.chLabel}</span>
      </div>
      <ContactOption shown={false} />
    </div>
  );
};

export default Selects;
