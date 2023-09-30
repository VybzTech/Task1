import { Input } from "antd";
import React from "react";
import Selects from "../Selects";
import Fields from "../Fields";
import AddQuestion from "../AddQuestion";

const Profile = () => {
  return (
    <div className="InfoForm">
      <Selects
        label={"Education"}
        action={<Fields name={""} label={""} placeholder={""} />}
        chLabel={"Mandatory"}
      />
      <Selects
        label={"Experience"}
        action={<Fields name={""} label={""} placeholder={""} />}
        chLabel={"Mandatory"}
      />
      <Selects
        label={"Resume"}
        action={<Fields name={""} label={""} placeholder={""} />}
        chLabel={"Mandatory"}
      />
      <AddQuestion />
    </div>
  );
};

export default Profile;
