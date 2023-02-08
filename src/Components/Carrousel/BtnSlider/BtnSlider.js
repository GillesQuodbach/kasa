import React from "react";
import leftArrow from "../BtnSlider/left-arrow.svg";
import rightArrow from "../BtnSlider/right-arrow.svg";
import "./BtnSlider.css";

export default function BtnSlider({ moveSlide, direction, picNumber }) {
  // console.log(moveSlide);
  // console.log(direction);
  console.log(picNumber);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        className={picNumber === 1 ? "btn-svg hide" : ""}
        src={direction === "next" ? rightArrow : leftArrow}
        alt="arrow-icon"
      />
    </button>
  );
}
