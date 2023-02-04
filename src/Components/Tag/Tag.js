import React from "react";
import "./Tag.css";
import dataLogement from "../../Services/annonces.json";

export default function Tag(props) {
  const tagArray = props.text;

  return tagArray.map((item) => (
    <div className="tag-item" key={item}>
      {item}
    </div>
  ));
}
