import React from "react";
import "./Banner.css";

export default function Banner(props) {
  console.log(props);
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${props.bannerBackground})`,
      }}
    >
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  );
}
