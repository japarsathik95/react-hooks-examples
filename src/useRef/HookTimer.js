import React, { useState, useEffect, useRef } from "react";

export default function HookTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Timer - {timer}
      <br />
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}
