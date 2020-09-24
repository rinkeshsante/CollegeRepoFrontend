import React from "react";
import "./App.css";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="row">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
