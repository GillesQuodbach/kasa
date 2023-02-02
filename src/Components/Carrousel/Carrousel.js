import React, { useState } from "react";
import "./Carrousel.css";
import annonces from "../../Services/annonces.json";

export default function Carrousel() {
  const [carrouselAnimation, setCarrouselAnimation] = useState({
    index: 1,
    inProgress: false,
  });

  return (
    <div>
      {annonces.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              carrouselAnimation.index === index + 1
                ? "carrousel active-anim"
                : "slide"
            }
          >
            <img src={""}></img>
          </div>
        );
      })}
    </div>
  );
}
