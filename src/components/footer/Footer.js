import React from "react";
import "./footer.css";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Kasa" className="img-logo-footer" />
      <p>© 2020 Kasa. All right reserved</p>
    </footer>
  );
};

export default Footer;
