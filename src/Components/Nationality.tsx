import React from "react";

const Nationality = () => {
  const nations = ["", "Nigeria"];
  return (
    <select name="Nationality" id="Nationality">
      {nations?.map((nat, id) => (
        <option value={nat} label={nat} hidden={id === 0 ? true : false}>
          {nat}
        </option>
      ))}
    </select>
  );
};

export default Nationality;
