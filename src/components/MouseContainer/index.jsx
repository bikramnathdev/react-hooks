import React, { useState } from "react";
import UseEffectCleanup from "../UseEffectCleanup";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle</button>
      {display && <UseEffectCleanup />}
    </div>
  );
}

export default MouseContainer;
