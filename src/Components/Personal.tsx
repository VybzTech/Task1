import { Input } from "antd";
import React from "react";
import Fields from "./Fields";
import Selects from "./Selects";
import Phone from "./Phone";
import Nationality from "./Nationality";

const Personal = () => {
  return (
    <div className="InfoForm">
      {/* <Input /> */}
      <Fields name={"firstName"} label={"First Name"} placeholder={""} />
      <Fields name={"lastName"} label={"Last Name"} placeholder={""} />
      <Fields name={"email"} label={"Email"} placeholder={""} />
      <Selects label="Phone" action={<Phone />} />
      <Selects
        label="Current Residence"
        action={<Fields name={""} label={""} placeholder={""} />}
      />
      <Selects label="ID Number" action={<Nationality />} />
      <Selects label="date of Birth" action={<Nationality />} />
      <Selects label="Gender" action={<Nationality />} />
      {/* <AddQuestion /> */}
    </div>
  );
};

export default Personal;
