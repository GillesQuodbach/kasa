import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";

export const data = require("../../Services/annonces.json");

export default function Home(props) {
  console.log(props);
  return (
    <div className="fiche-logement-container">
      <p>Hello from fiche-logement</p>
    </div>
  );
}
