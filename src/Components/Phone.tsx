import React from "react";
type phoneProps = { placeholder: string };
const Phone = (props: phoneProps) => {
  return <input type="number" placeholder={props.placeholder} />;
};

export default Phone;
