import React from "react";

function Count({ text, count }) {
  console.log("Rendering Count - ", text);
  return <h3>{count}</h3>;
}

export default React.memo(Count);
