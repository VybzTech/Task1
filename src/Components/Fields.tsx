import React from "react";
// import FormError from "./FormError";
// import { Field, ErrorMessage } from "formik";
type FieldProps = {
  name: string;
  label: string;
  placeholder: string;
  //  , err, star, ...rest
};
const Fields = (props: FieldProps) => {
  // const { name, label, err, star, ...rest } = props;
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
      {/* <span classprops.Name={err.props.name ? "err" : ""}>
        <ErrorMessage err={err.props.name} props.name={props.name} component={FormError} />
      </span> */}
    </div>
  );
};

export default Fields;
