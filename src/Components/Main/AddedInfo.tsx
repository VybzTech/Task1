import React from "react";
import Input from "../Input";
import InfoForm from "../InfoForm";
import AddQuestion from "../AddQuestion";
import Choice from "../Choice";
import DeleteQuestion from "../DeleteQuestion";

const AddedInfo = () => {
  return (
    <div className="InfoForm">
      <InfoForm
        name={"paragraph"}
        label={"Paragraph"}
        placeholder={"Please tell me about yourself in less than 500 words"}
      />
      <InfoForm
        name={"dropdown"}
        label={"Dropdown"}
        placeholder={"Please select the year of graduation from the list below"}
      />
      <Input name="question" label="Question" placeholder="type here" />
      <InfoForm
        name={"dropdown"}
        label={"Dropdown"}
        placeholder={"Please tell me about yourself in less than 500 words"}
      />
      <Choice />
      <DeleteQuestion />
      <InfoForm
        name={"more ?ns"}
        label={"Yes/No questions"}
        placeholder={"Have you ever been rejected by the UK embassy?"}
      />
      <AddQuestion />
    </div>
  );
};

export default AddedInfo;
