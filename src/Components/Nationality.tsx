import React from "react";
type nationProps = {
  name: string;
  nations: string[];
};
const Nationality = (props: nationProps) => {
  return (
    <select name={props.name} id={props.name}>
      {props.nations?.map((nat, id) => (
        <option value={nat} label={nat} hidden={id === 0 ? true : false}>
          {nat}
        </option>
      ))}
    </select>
  );
};

export default Nationality;
