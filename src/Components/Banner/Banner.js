import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div
      className="banner-container"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.bannerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundImage: `url(${props.bannerBackground})`,
      }}
    >
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  );
}
