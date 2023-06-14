import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const submit = () => {
    console.log("실행");
    navigate("/about");
  };

  return (
    <>
      <div>Contact</div>
      <button onClick={submit}>클릭</button>
    </>
  );
}

export default Contact;
