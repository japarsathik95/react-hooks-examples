import React, { useState, useReducer } from "react";
import App from "./App";
import Timer from "./Timer";
import FetchData from "./FetchData";
import ComponentC from "./ComponentC";
import Counter from "./Counter";
import CounterComplex from "./CounterComplex";

import FetchuseState from "./FetchData/FetchuseState";
import FetchuseReducer from "./FetchData/FetchuseReducer";

import ParentComponent from "./useCallback/ParentComponent";

//useRef
import FocusInput from "./useRef/FocusInput";

//useMemeo
import CounterUseMemo from "./useMemo/Counter";

//using useReducer and useContext for sharing the state across different components
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentCnew from "./components/ComponentC";

export const CountContext = React.createContext();

export const UserContext = React.createContext();
export const PositionContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Container() {
  const [display, setDisplay] = useState(true);
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ParentComponent />
      {/*<FocusInput /> */}
      <CounterUseMemo />
      {/* <FetchuseState />
      <FetchuseReducer />
      <h1>{count}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentCnew />
      </CountContext.Provider>
      <br />
      <hr />
      <CounterComplex />
      <Counter />
      <UserContext.Provider value={"Japarsathik"}>
        <PositionContext.Provider value={"Engineer"}>
          <ComponentC />
        </PositionContext.Provider>
      </UserContext.Provider>
      <FetchData />
      <Timer />
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <App />} */}
    </div>
  );
}
