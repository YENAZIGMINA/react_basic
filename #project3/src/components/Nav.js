import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container">
        <Link to="/" className="text-white">
          Home
        </Link>

        <div id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link text-white"
                aria-current="page"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
