import React from "react";
import logo from "./percunia.jpeg";
import "./App.css";
import Expenses from "./Expenses";
import Chart from "./Chart";
import Input from "./Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Input />
      <Expenses />
      <Chart />
    </div>
  );
}

export default App;
