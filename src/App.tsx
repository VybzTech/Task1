import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Upload from "./Components/Upload";
import Container from "./Components/Container";
import InfoForm from "./Components/InfoForm";
import CompoundedSpace from "antd/es/space";
//   import { blue } from '@ant-design/colors';
// import "antd/dist/antd.css";
import "antd/dist/reset.css"
import { Space, Button } from "antd";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Space
      //align , direction, size, split, wrap
      >
        <Container heading="Upload cover image" body={<Upload />} />
      </Space>
      <Container heading="Personal Information" body={<InfoForm />} />
      <Container heading="Profile" body={<InfoForm />} />
      <Container heading="Additional questions" body={<InfoForm />} />
      <Container heading="Additional questions" body={<InfoForm />} />
    </div>
  );
}

export default App;
