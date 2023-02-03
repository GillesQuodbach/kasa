import React from "react";
import Banner from "../../Components/Banner/Banner";
import "../../Components/Banner/Banner.css";
import Dropdown from "../../Components/Dropdown/Dropdown";
import dropdownData from "../../Services/dropdownContent.json";

export default function Apropos(props) {
  console.log(dropdownData);
  return (
    <div className="apropos-container">
      <Banner bannerBackground={props.bannerBackground[1]} />
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
  );
}
