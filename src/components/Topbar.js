import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
const [click, setClick] = useState(false);

const closeMenu = () => setClick(false);

  return (
    <nav>
      <div className="topbar-container">
        <div className="left">
          <Link to="/" className="logo" onClick={closeMenu}>
            Rocket League
          </Link>
        </div>
        <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hit-boxes" className="nav-links" onClick={closeMenu}>
              Car Hitboxes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-links" onClick={closeMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Topbar;
