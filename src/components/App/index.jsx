import React, { useState } from "react";
import MouseContainer from "../MouseContainer";
import UseEffectFetch from "../UseEfectFetch";
import UseEffect from "../UseEffect";
import UseEffectFetchDependency from "../UseEffectFetchDependency";
import UseEffectIntialRun from "../UseEffectIntialRun";
import UseState from "../UseState";
import UseStateArray from "../UseStateArray";
import UseStateObject from "../UseStateObject";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectIntialRun/> */}
      {/* <MouseContainer/> */}
      {/* <UseEffectFetch/> */}
      <UseEffectFetchDependency />
    </div>
  );
}

export default App;
