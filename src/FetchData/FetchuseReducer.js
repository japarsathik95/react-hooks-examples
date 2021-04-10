import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "FAILURE":
      return {
        loading: false,
        post: "",
        error: "Something went wrong"
      };
    default:
      return state;
  }
};

export default function FetchuseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/12")
      .then(res => {
        dispatch({ type: "SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FAILURE" });
      });
  }, []);

  return (
    <div>
      {state.loading ? <div>loading</div> : <div>{state.post.title}</div>}
      {state.error && <div>{state.error}</div>}
      <br />
      <hr />
    </div>
  );
}
