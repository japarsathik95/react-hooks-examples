import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, PositionContext } from "./container";

export default function ComponentE() {
  //Using useContext
  const user = useContext(UserContext);
  const position = useContext(PositionContext);
  return (
    <div>
      {user}, {position}
      <br />
      <hr />
      <ComponentF />
    </div>
  );
}
