import React from "react";
import { Link } from "react-router-dom";
import "./Error404.css";

export default function Error404() {
  return (
    <div className="error404-container">
      <h1 className="error404">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p>
        <Link to="/" className="back-to-home">
          Retourner à la page d'accueil
        </Link>
      </p>
    </div>
  );
}
