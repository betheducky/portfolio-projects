import React from "react";
import "./styles.scss";
import Logo from "./../../assets/goodsounds.png";
import { Link } from "react-router-dom";

// My atttempt to apply what I knew about components, props, and interfaces in ts...

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="GoodSounds-LOGO" />
          </Link>
        </div>

        <div className="call-to-action">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
