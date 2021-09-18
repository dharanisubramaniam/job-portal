import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import "./Header.scss";

function Header() {
  const [menuOpen, setmenuOpen] = useState(false);
  const toggle = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <Link className="logoWrapper" to="/">
        <img className="logo" src="/assets/Logo.svg" alt="logo" />
      </Link>
      <div className="hamburger">
        <img
          src="assets/Group46.svg"
          alt="hamburger"
          onClick={() => {
            setmenuOpen(!menuOpen);
          }}
        />
      </div>
      <nav className="navSection">
        <ul>
          <li>
            <a href="#">Creative Jobs</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="mobileMenuActive">
          <div className="mobileMenuIcon">
            <MdClose
              onClick={() => {
                toggle();
              }}
              className="closeIcon"
            />
          </div>
          <div className="mobileMenuLogo">
            <img
              src="/assets/Group45.svg"
              alt="whiteLogo"
              onClick={() => {
                toggle();
              }}
            />
          </div>
          <nav className="navMobile">
            <ul>
              <li
                onClick={() => {
                  toggle();
                }}
              >
                <a href="#">Creative Jobs</a>
              </li>
              <li
                onClick={() => {
                  toggle();
                }}
              >
                <a href="#">Courses</a>
              </li>
              <li
                onClick={() => {
                  toggle();
                }}
              >
                <a href="#">About</a>
              </li>
              <li
                onClick={() => {
                  toggle();
                }}
              >
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
