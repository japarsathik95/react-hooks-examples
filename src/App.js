import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  //Simple useState hooks
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  //Simple useState hook for an object
  const [name, setName] = useState({ firstName: "", lastName: "" });

  //Simple useState hook for an array
  const [items, setItems] = useState([]);

  //Mouse position
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  //Update the state using previous state
  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  //update mouse postiton
  const logMousePosition = e => {
    console.log("update mouse position");
    setX(e.clientX);
    setY(e.clientY);
  };

  //useEffect hook which replaces side effects - componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    console.log("Updating the document title");
    document.title = `You clicked ${count} times`;
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, [count]);

  // // useEffect hook to replace  - componentDidMount
  // useEffect(() => {
  //   console.log("useEffect Called");
  //   window.addEventListener("mousemove", logMousePosition);
  // }, []);

  //Add random item to an array
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        name: Math.floor(Math.random() * 10) + 1
      }
    ]);
  };

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementByFive}>Increment By Five</button>
      <br />
      <hr />
      <h2>Your first name : {name.firstName}</h2>
      <h2>Y0ur last name : {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
      <form>
        <input
          type="text"
          placeholder="First name"
          value={name.firstName}
          onChange={e => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last name"
          value={name.lastName}
          onChange={e => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <br />
      <hr />
      <button onClick={addItem}>Add item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <br />
      <hr />
      <h1>
        Hooks - X: {x}, Y: {y}
      </h1>
    </div>
  );
}
