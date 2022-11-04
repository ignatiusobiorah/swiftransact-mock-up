import React from "react";
import "../styles/footer.scss";
import logo from "../img/footer-logo1.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footerSec1">
        <div className="footerlogo">
          <img src={logo} alt="swiftransact-logo" />
        </div>
        <div className="footerContent">
          <p>
            Opensource crypto exchange platform, giving you the best Value of
            your digital assets.
          </p>
          <p className="email">swiftransactofficial@gmail.com</p>

          <h4>Nigeria</h4>
          <p>No. 20A Girls School Rd. Elelenwo</p>
          <p>Portharcourt</p>
        </div>
      </div>

      <div className="footerSec2">
        <div className="company">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
          </ul>
        </div>
        <div className="canada">
          <h4>Canada</h4>
          <p>Hwy 1 & 9 Whitewood</p>
          <p>Saskatchewan</p>
        </div>
      </div>

      <div className="footerSec3">
        <div className="legal">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="/">Terms & Condition</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">AMl & KYC Policy</a>
            </li>
            <li>
              <a href="/">Security</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerSec4">
        <form>
          <h4>Newsletter</h4>
          <p>Signup to get updated on our latest news</p>
          <input type="text" placeholder="Email" />
          <button className="footerBtn">SUBSCRIBE</button>
        </form>
        {/* <div className="socialIcons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div> */}
        <div>
          <p>copyright 2022 @swiftransact.io</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
