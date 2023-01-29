import React from "react";
import Background from "../../Assets/Background.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-img-container">
        <img className="home-img" src={Background} alt="" />
        <p className="home-img-text">Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}
