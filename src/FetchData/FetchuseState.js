import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchuseState() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch(err => {
        setLoading(false);
        setPost({});
        setError("Someting went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? <div>loading</div> : <div>{post.title}</div>}
      {error && <div>{error}</div>}
      <br />
      <hr />
    </div>
  );
}
