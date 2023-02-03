import React, { useState, useEffect, useRef } from "react";
import "./FicheLogement.css";
import { useParams } from "react-router-dom";
import dataLogement from "../../Services/annonces.json";

export default function FicheLogement() {
  const { id } = useParams();

  const clickedLogement = dataLogement.findIndex(
    (item) => item.title.replace(/\s+/g, "").trim() === id
  );
  console.log(clickedLogement);

  return (
    <div className="fiche-logement-container">
      <p>{dataLogement[clickedLogement].title}</p>
    </div>
  );
}
