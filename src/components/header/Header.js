import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo2 from "./Logo.svg";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo2} alt="Kasa" className="img-logo" />
      <nav>
        <ul>
          <li>
            <Link to="/home">Acceuil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
