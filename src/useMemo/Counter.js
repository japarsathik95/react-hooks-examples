import React, { useState } from "react";

export default function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const updateCountone = () => {
    setCountOne(countOne + 1);
  };

  const updateCounttwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = () => {
    return countOne % 2 === 0;
  };

  return (
    <div>
      <br />
      <hr />
      <div>
        <button onClick={updateCountone}>Count One - {countOne}</button>
        <span>{isEven() ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={updateCounttwo}>Count Two - {countTwo}</button>
      </div>
    </div>
  );
}
