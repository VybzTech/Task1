import React from "react";
import { Input } from "antd";
import { BarsOutlined, PlusOutlined } from "@ant-design/icons";

const Choice = () => {
  return (
    <div>
      <BarsOutlined />
      <h3>Choice</h3>
      <Input placeholder="Type here" />
      <PlusOutlined />
    </div>
  );
};

export default Choice;
