import React, { useState } from "react";
import Header from "../../layouts/header";
import MouseContainer from "../MouseContainer";
import UseEffectFetch from "../UseEfectFetch";
import UseEffect from "../UseEffect";
import UseEffectFetchDependency from "../UseEffectFetchDependency";
import UseEffectIntialRun from "../UseEffectIntialRun";
import UseReducer from "../UseReducer";
import UseState from "../UseState";
import UseStateArray from "../UseStateArray";
import UseStateObject from "../UseStateObject";
import "./App.css";
export const LangContext = React.createContext({
  language: 'ENGLISH',
  setLanguage: (lang) => {}
});


function App() {
  const [language, setLanguage] = useState('ENGLISH');

  return (
    <div className="App">
      {/* <LangContext.Provider value={{language, setLanguage}}>
        <Header/>
      </LangContext.Provider> */}
      {/* <UseState/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArray/> */}
      {/* <UseEffect/> */}
      {/* <UseEffectIntialRun/> */}
      {/* <MouseContainer/> */}
      {/* <UseEffectFetch/> */}
      {/* <UseEffectFetchDependency /> */}
      <UseReducer/>

    </div>
  );
}

export default App;
