import React from "react";
import "./App.css";
import Header from "./Components/Main/Header";
import Navbar from "./Components/Main/Navbar";
import Upload from "./Components/Main/Upload";
import Container from "./Components/Container";
import "antd/dist/reset.css";
import Profile from "./Components/Main/Profile";
import AddedInfo from "./Components/Main/AddedInfo";
import Personal from "./Components/Main/Personal";

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
      </main>
    </div>
  );
}

export default App;
