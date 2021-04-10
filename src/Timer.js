import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // other way around
    // setCount(prevCount => prevCount + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <div>
      <h1>Interval</h1>
      <h1>{count}</h1>
      <br />
      <hr />
    </div>
  );
}
