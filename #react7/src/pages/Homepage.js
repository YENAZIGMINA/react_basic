import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div>Homepage</div>
      <Link to="/about">go to about</Link> {/* Link는 a태그 */}
    </div>
  );
};

export default Homepage;
