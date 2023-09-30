import { EditFilled } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
type InProps = {
  name: string;
  label: string;
  placeholder: string;
};
const InfoForm = (props: InProps) => {
  return (
    <div className="InfoForm">
      <label htmlFor={props.label}>{props.label}</label>
      <Input placeholder={props.placeholder} />
      <EditFilled />
    </div>
  );
};

export default InfoForm;
