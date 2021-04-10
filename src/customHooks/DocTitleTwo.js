import React, { useState } from "react";
import useDocumentTitle from "./Hooks/useDocumentTitle";

export default function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
      <br />
    </div>
  );
}
