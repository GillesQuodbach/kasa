import React, { useState, useEffect, useRef } from "react";
import "./FicheLogement.css";
import { useParams } from "react-router-dom";
import data from "../../Services/annonces.json";
import Tag from "../../Components/Tag/Tag";
import Rating from "../../Components/Rating/Rating";
import Dropdown from "../../Components/Dropdown/Dropdown";
import "../../Components/Dropdown/Dropdown";
import Carrousel from "../../Components/Carrousel/Carrousel";

export default function FicheLogement(props) {
  const { id } = useParams();
  console.log(data);
  const clickedLogement = data.findIndex(
    (item) => item.title.replace(/\s+/g, "").trim() === id
  );

  return (
    <div className="fiche-logement-container">
      <div className="carrousel-container">
        <Carrousel clickedData={data[clickedLogement]} />
      </div>
      <div className="logement-main-info">
        <div className="logement-info-container">
          <p className="logement-title">{data[clickedLogement].title}</p>
          <p className="logement-location">{data[clickedLogement].location}</p>
          <div className="tags-container">
            <Tag
              key={data[clickedLogement].id}
              text={data[clickedLogement].tags}
            />
          </div>
        </div>
        <div className="logement-owner-container">
          <div className="owner-info">
            <p className="logement-owner-name">
              {data[clickedLogement].host.name}
            </p>
            <img
              className="logement-owner-picture"
              src={data[clickedLogement].host.picture}
              alt=""
            />
          </div>
          <div className="rating-container">
            <Rating
              startKey={data[clickedLogement].id}
              ratings={data[clickedLogement].rating}
            />
          </div>
        </div>
      </div>
      <div className="dropdown-container">
        <Dropdown
          title={"Description"}
          content={data[clickedLogement].description}
        />
        <Dropdown
          title={"Equipements"}
          content={data[clickedLogement].equipments.map((item) => (
            <li
              key={data[clickedLogement].id + item}
              className="equipment-item"
            >
              {item}
            </li>
          ))}
        />
      </div>
    </div>
  );
}
