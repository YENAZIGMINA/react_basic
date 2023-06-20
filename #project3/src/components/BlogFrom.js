import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    console.log(title, body);
    axios.post("http://localhost:3004/posts", {
      //title, body (아래를 줄여서 쓴다)
      title: title,
      body: body,
    }).then(()=>{
      navigate('/blogs');
    });
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>

      <button className="btn btn-danger" onClick={onSubmit}>
        🤍 Post 🤍
      </button>
    </div>
  );
};

export default BlogForm;
