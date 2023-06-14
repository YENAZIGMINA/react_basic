import { useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav class="navbar bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
