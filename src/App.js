import React from "react";
import "./App.css";
import Footer from "./components/footer";
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
      <Footer></Footer>
    </div>
  );
}

export default App;
