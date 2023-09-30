import React from "react";
import Fields from "../Fields";
import Selects from "../Selects";
import Phone from "../Phone";
import Nationality from "../Nationality";
import AddQuestion from "../AddQuestion";

const Personal = () => {
  const nations: string[] = ["", "Nigeria"];
  const gends: string[] = ["", "Male", "Female"];

  return (
    <div className="InfoForm">
      <Fields name={"firstName"} label={"First Name"} placeholder={""} />
      <Fields name={"lastName"} label={"Last Name"} placeholder={""} />
      <Fields name={"email"} label={"Email"} placeholder={""} />
      <Selects
        label="Phone"
        chLabel="Internal"
        action={<Phone placeholder="(without dial code)" />}
      />
      <Selects
        label="Nationality"
        chLabel="Internal"
        action={<Nationality name="Nationality" nations={nations} />}
      />
      <Selects
        label="Current Residence"
        chLabel="Internal"
        action={<Fields name={""} label={""} placeholder={""} />}
      />
      <Selects
        chLabel="Internal"
        label="ID Number"
        action={<Phone placeholder="" />}
      />
      <Selects
        chLabel="Internal"
        label="date of Birth"
        action={<Phone placeholder="" />}
      />
      <Selects
        chLabel="Internal"
        label="Gender"
        action={<Nationality name="Gender" nations={gends} />}
      />
      <AddQuestion />
    </div>
  );
};

export default Personal;
