import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src="/assets/Colour.png" />
      <a className="link" to="https://www.filmyeffects.com/">
        Back To Home
      </a>
    </div>
  );
}

export default Header;
