import React, { useContext } from "react";
import { LangContext } from "./../../components/App";
function Header() {
  const { language, setLanguage } = useContext(LangContext);
  return (
    <div>
      {language}
      <div>
        <button onClick={() => setLanguage("ENGLISH")}>English</button>
        <button onClick={() => setLanguage("HINDI")}>Hindi</button>
        <button onClick={() => setLanguage("SPANISH")}>Spanish</button>
      </div>
    </div>
  );
}

export default Header;
