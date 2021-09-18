import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="footerContent">
          <div className="footer_sectionOne">
            <img className="logo" src="/assets/Logo.svg" alt="logo" />
            <p>
              Join hundreds of learners in mastering animation, editing, and VFX
              and choose a creative job that you love!
            </p>
          </div>
          <div className="footer_sectionTwo">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Creative Jobs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_sectionThree">
            <span>Find us on Social Media</span>
            <div className="iconWrapper">
              <a href="https://www.facebook.com/Filmyeffects/">
                <img
                  className="socialMediaLogo"
                  src="/assets/FB.svg"
                  alt="logo"
                />
              </a>
              <a href="https://www.instagram.com/filmyeffects/">
                <img
                  className="socialMediaLogo"
                  src="/assets/IG.svg"
                  alt="logo"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCHsxcVviQv9XWH0xfUic__w">
                <img
                  className="socialMediaLogo"
                  src="/assets/YT.svg"
                  alt="logo"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCHsxcVviQv9XWH0xfUic__w">
                <img
                  className="socialMediaLogo"
                  src="/assets/LinkedIn.svg"
                  alt="logo"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCHsxcVviQv9XWH0xfUic__w">
                <img
                  className="socialMediaLogo"
                  src="/assets/Twitter.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="footerText">
          Crafted with <img className="heart" src="/assets/Heart.svg" /> in
          India for dreamers and go-getters. All rights reserved © 2021 Filmy
          Effects.
        </p>
      </div>
    </div>
  );
}

export default Footer;
