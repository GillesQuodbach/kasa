import React, { useState } from "react";
import "./Carrousel.css";
import BtnSlider from "./BtnSlider/BtnSlider";

export default function Carrousel({ clickedData }) {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  const nextSlide = () => {
    if (
      slideAnim.index !== clickedData.pictures.length &&
      !slideAnim.inProgress
    ) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 400);
    } else if (
      slideAnim.index === clickedData.pictures.length &&
      !slideAnim.inProgress
    ) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: clickedData.pictures.length, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: clickedData.pictures.length, inProgress: false });
      }, 400);
    }
  };

  return (
    <div>
      {clickedData.pictures.map((obj, index) => {
        // console.log(clickedData.pictures);
        return (
          <div
            key={index}
            id={index}
            className={
              slideAnim.index === index + 1
                ? "carrousel active-anim"
                : "carrousel"
            }
          >
            <img src={clickedData.pictures[index]} alt={`Num ${index}`} />
          </div>
        );
      })}
      <BtnSlider
        moveSlide={nextSlide}
        direction={"next"}
        picNumber={clickedData.pictures.length}
      />
      <BtnSlider
        moveSlide={prevSlide}
        direction={"prev"}
        picNumber={clickedData.pictures.length}
      />
      <div className="counter">{`${slideAnim.index}/${clickedData.pictures.length}`}</div>
    </div>
  );
}
