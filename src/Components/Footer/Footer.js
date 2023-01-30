import React from "react";
import "./Footer.css";
import { ReactComponent as FooterLogo } from "../../Assets/logo_footer.svg";

export default function Header() {
  return (
    <div className="footer-container">
      <FooterLogo />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
