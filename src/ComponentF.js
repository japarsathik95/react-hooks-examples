import React from "react";
import { UserContext, PositionContext } from "./container";

//without Using useContext - Default way
export default function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <PositionContext.Consumer>
              {position => {
                return (
                  <div>
                    {user}, {position}
                  </div>
                );
              }}
            </PositionContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      <br />
      <hr />
    </div>
  );
}
