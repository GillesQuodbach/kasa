import React from "react";
import Banner from "../../Components/Banner/Banner";
import "../../Components/Banner/Banner.css";
import Dropdown from "../../Components/Dropdown/Dropdown";
import dropdownData from "../../Services/dropdownContent.json";
import "./Apropos.css";

export default function Apropos(props) {
  console.log(props);
  return (
    <div className="apropos-container">
      <Banner
        class={"apropos-banner"}
        bannerBackground={props.bannerBackground[1]}
      />
      <div className="dropdown-apropos-container">
        {dropdownData.map((item) => {
          return (
            <Dropdown
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}
