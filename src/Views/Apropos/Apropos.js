import React from "react";
import Banner from "../../Components/Banner/Banner";
import "../../Components/Banner/Banner.css";

export default function Apropos(props) {
  return (
    <div className="apropos-container">
      <Banner bannerBackground={props.bannerBackground[1]} />
    </div>
  );
}
