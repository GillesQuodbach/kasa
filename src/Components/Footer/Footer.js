import React from "react";
import "./Footer.css";
import { ReactComponent as FooterLogo } from "../../Assets/logo_footer.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="footer-container">
      <NavLink to="/">
        <FooterLogo />
      </NavLink>
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
