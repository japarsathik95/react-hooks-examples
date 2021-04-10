import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idButtonClick, setIdButtonClick] = useState(1);

  const handleClick = () => {
    setIdButtonClick(id);
  };

  useEffect(() => {
    if (idButtonClick) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
        .then(res => {
          console.log(res);
          setPost(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [idButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <br />
      <br />
      <h3>{post.title}</h3>
      <br />
      <hr />
    </div>
  );
}
