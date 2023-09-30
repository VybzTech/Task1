import React, { useEffect, useState } from "react";
type Option = {
  shown: boolean;
};
const ContactOption = ({ shown }: Option) => {
  const [opted, setOpted] = useState(false);

  useEffect(() => {
    setOpted(shown);
  }, []);

  const activateOpt = async () => {
    setOpted((opt) => !opt);
  };

  return (
    <div className={"contact__option"}>
      <label className={"switch"}>
        <input
          type="checkbox"
          onClick={activateOpt}
          checked={!opted ? true : false}
        />
        <span className={`slider round ${!opted ? "green" : ""}`} />
      </label>
      <h3>{!opted ? "Hide" : "Show"}</h3>
    </div>
  );
};

export default ContactOption;
