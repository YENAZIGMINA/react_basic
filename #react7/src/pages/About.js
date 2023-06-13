import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/"); /* App.js - Route path 참고 */
  };

  return (
    <>
      <div>About</div>
      <button onClick={gotoHome}>Go to Homepage</button>
    </>
  );
};

export default About;
