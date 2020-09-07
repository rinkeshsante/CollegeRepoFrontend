import React from "react";
import "./App.css";
import { TestDep } from "./components/testDep";
import { TestForm } from "./components/testForm";

function App() {
  return (
    <div className="Container">
      <TestDep></TestDep>
      <TestForm></TestForm>
    </div>
  );
}

export default App;
