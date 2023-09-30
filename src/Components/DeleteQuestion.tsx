import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const DeleteQuestion = () => {
  return (
    <div>
      <span>
        <CloseOutlined />
        Delete Question
      </span>
      <Button className="btn success">Save</Button>
    </div>
  );
};

export default DeleteQuestion;
