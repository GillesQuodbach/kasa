import React, { useState } from "react";
import "./Carrousel.css";
import dataCarrousel from "../../Services/annonces.json";

export default function Carrousel() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  return (
    <div>
      {dataCarrousel.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              setSlideAnim.index === index + 1
                ? "carrousel active-anim"
                : "slide"
            }
          ></div>
        );
      })}
    </div>
  );
}
