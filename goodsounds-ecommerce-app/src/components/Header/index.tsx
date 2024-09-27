import React from "react";
import "./styles.scss";
import Logo from "./../../assets/goodsounds.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";

interface HeaderProps {
  currentUser: object | null;
}

// My atttempt to apply what I knew about components, props, and interfaces in ts...

const Header = (props: HeaderProps) => {
  const { currentUser } = props;

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="GoodSounds-LOGO" />
          </Link>
        </div>

        <div className="call-to-action">
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>Log Out</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
