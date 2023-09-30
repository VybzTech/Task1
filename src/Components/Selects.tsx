import React from "react";
import ContactOption from "./ContactOption";
// import FormError from "./FormError";
// import { Select, ErrorMessage } from "formik";
type SelectProps = {
  // label: string;
  label: string;
  action: JSX.Element;
  // placeholder: string;
  //  , err, star, ...rest
};
const Selects = (props: SelectProps) => {
  // const { label, label, err, star, ...rest } = props;
  return (
    <div className="formControl">
      <div>
        <label htmlFor={props.label}>{props.label}</label>
        {props.action}
        <input
          type="checkbox"
          // placeholder={props.placeholder}
          name={props.label}
          id={props.label}
        />
      </div>
      <ContactOption
        name={"hide"}
        value={"Hide"}
        setValue={() => {}}
        icon={() => {}}
        shown={true}
        placeholder={"Hide"}
      />
      {/* <span classprops.label={err.props.label ? "err" : ""}>
        <ErrorMessage err={err.props.label} props.label={props.label} component={FormError} />
      </span> */}
    </div>
  );
};

export default Selects;
