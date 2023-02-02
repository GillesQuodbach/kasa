import React from "react";
import "./Home.css";
import Card from "../../Components/Card/Card";
import Banner from "../../Components/Banner/Banner";
import data from "../../Services/annonces.json";

export default function Home(props) {
  console.log(data);
  return (
    <div className="home-container">
      <Banner bannerBackground={props.bannerBackground[0]} />
      <div className="home-cards-container">
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.pictures}
              cover={item.cover}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
