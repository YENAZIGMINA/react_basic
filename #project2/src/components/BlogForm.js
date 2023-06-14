import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import React from "react";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    console.log(title, body);
    axios.post("http://localhost:3004/posts", {
      title: title,
      body: body,
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
          }} /* onChange -> 사용자가 입력한대로 값 받아서 빈칸에서 변경되어 작성가능 */
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          className="form-control"
          rows={10} /* textarea 칸 넓히기 */
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
}

export default BlogForm;
