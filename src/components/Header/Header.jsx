import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <img className="logo" src="/assets/Colour.png" alt="logo" />
      <a className="link" href="https://www.filmyeffects.com/">
        Home
      </a>
    </div>
  );
}

export default Header;
