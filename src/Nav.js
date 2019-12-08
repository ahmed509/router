import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>ahmed</h3>
      <ul className="nav-link">
        <Link style={navStyle} to="/about">
          <li>about</li>
        </Link>
        <Link style={navStyle} to="/shope">
          <li>shope</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
