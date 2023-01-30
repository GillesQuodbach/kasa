import React from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";

export const data = require("../../Services/annonces.json");

export default function Home() {
  console.log(data);
  return (
    <div className="home-container">
      <Banner />
      <div className="home-cards-container">
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <h2 className="card-location-title">{item.title}</h2>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
