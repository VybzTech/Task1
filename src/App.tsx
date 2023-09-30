import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Upload from "./Components/Upload";
import Container from "./Components/Container";
import InfoForm from "./Components/InfoForm";
import "antd/dist/reset.css";
import Profile from "./Components/Profile";
import AddedInfo from "./Components/AddedInfo";
import Personal from "./Components/Personal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Container heading="Upload cover image" body={<Upload />} />
        <Container heading="Personal Information" body={<Personal />} />
        <Container heading="Profile" body={<Profile />} />
        <Container heading="Additional questions" body={<AddedInfo />} />
        {/* <Container heading="Additional questions" body={<InfoForm />} /> */}
      </main>
    </div>
  );
}

export default App;
