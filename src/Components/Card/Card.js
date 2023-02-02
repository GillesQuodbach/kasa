import React from "react";
import "./Card.css";

export default function Card(props) {
  console.log(props);
  return (
    <div
      id={props.id}
      className="card"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.cover})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="card-location-title">{props.title}</h2>
      {/* <img className="card-cover" src={props.cover} alt={props.title}></img> */}
    </div>
  );
}
