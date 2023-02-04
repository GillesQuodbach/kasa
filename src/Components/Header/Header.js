import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { ReactComponent as HeaderLogo } from "../../Assets/logo.svg";

export default function Header() {
  return (
    <div className="header-container">
      <NavLink to="/">
        <HeaderLogo />
      </NavLink>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive
              ? { textDecoration: "underline" }
              : { textDecoration: "none" };
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => {
            return isActive ? "activeLink" : "";
          }}
        >
          A propos
        </NavLink>
      </nav>
    </div>
  );
}
