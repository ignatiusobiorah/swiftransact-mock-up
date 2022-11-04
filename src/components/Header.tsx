import React from "react";
import { navTitle } from "../data/nav.data";
import { Link } from "react-router-dom";
import logo from "../img/swift.png";
import "../styles/header.scss";

const Header: React.FC = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="swiftransact-logo" />
        </a>
      </div>

      <div className="navList">
        <ul>
          {navTitle.map((item) => (
            <li key={item.id} className={item.className}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
