import { useState } from "react";
import "./App.css";
import axios, { isCancel, AxiosError } from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = () => {
    //console.log(title, body);
    axios.post("http://localhost:3004/posts", {
      title: title,
      body: body,
    });
  };

  return (
    /* 부트스트랩 form 복붙 */
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* ❗ onChange 값 작성해야 input에 사용자가 적은 내용이 작성됨 */}
      </div>

      <div className="mb-3">
        <label className="form-label">Body</label>
        <textarea
          type="text"
          className="form-control"
          rows="10" /* 텍스트 공간확보 */
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

export default App;
