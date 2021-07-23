import React from "react";
import "./Footer.scss";
import { AiFillInstagram, AiFillHeart } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <img src="/assets/Colour.png" alt="logo" />
        </div>

        <div className="footer__content">
          <span>Follow us</span>
          <div className="iconWrapper">
            <Link to="https://www.facebook.com/Filmyeffects/">
              <FaFacebook className="icon" />
            </Link>
            <Link to="https://www.instagram.com/filmyeffects/">
              <AiFillInstagram className="icon" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCHsxcVviQv9XWH0xfUic__w">
              <FaYoutube className="icon" />
            </Link>
          </div>
        </div>
        <div className="footer__content">
          <span>Contact</span>
          <p>filmyeffects@gmail.com</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          Made with <AiFillHeart style={{ color: "red", marginTop: "5px" }} />{" "}
          in India. Trademarks belong to their respective owners. All rights
          reserved © 2021 Filmy Effects.
        </p>
      </div>
    </div>
  );
}

export default Footer;
