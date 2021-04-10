import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secountCounter: 10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secountCounter: state.secountCounter + action.value };
    case "decrement2":
      return { ...state, secountCounter: state.secountCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterComplex() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count.firstCounter}</h2>
      <h2>{count.secountCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          Decrement by 5
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <br />
      <hr />
    </div>
  );
}
