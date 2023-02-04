import React, { useState, useEffect } from "react";
import "./Rating.css";
import Star from "./Star/Star";

export default function Rating({ ratings, startKey }) {
  const baseList = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState();

  useEffect(() => {
    setRating(parseInt(ratings));
  }, []);

  return (
    <div className="starListContainer">
      <ul className="starList">
        {baseList.map((index) => {
          return (
            <li key={startKey + index} className="starListItem">
              <Star orange={index <= rating} itemKey={startKey + index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
