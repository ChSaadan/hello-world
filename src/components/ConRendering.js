import React, { useState } from "react";

function ConRendering() {
  const [loggedIn, setLogin] = useState(true);

  return (
    <div>
      {loggedIn && <h1>Conitional Rendering True</h1>}

      {!loggedIn && <h1>Conitional Rendering False</h1>}
    </div>
  );
}

export default ConRendering;
