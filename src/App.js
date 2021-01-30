import React, { useState } from "react";
import "./App.css";
import { convert } from "./binary";

function App() {
  const [binary, setBinary] = useState("");
  const [number, setNumber] = useState("");

  const convertTheValue = () => {
    setNumber(convert(binary.split("")));
    //clearing the value
    setBinary("");
  };

  return (
    <div className="App">
      <h1>Learning Array()-- Push, unShift, POP & Shift </h1>
      <input
        type="number"
        placeholder="Type number"
        value={binary}
        onChange={(e) => setBinary(e.target.value)}
      />

      <p>
        <code>{` Our Binary  ${binary}  ==> ${number}`}</code>
      </p>

      <button onClick={convertTheValue}>Convert Binary to Decimal</button>
    </div>
  );
}

export default App;
