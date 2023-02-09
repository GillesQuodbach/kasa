import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className={props.class}>
      <p className="banner-text">Chez vous, partout et ailleurs</p>
    </div>
  );
}
