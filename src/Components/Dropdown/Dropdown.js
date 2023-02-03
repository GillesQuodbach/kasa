import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import Chevron from "./icons/chevron.svg";

export default function Dropdown(props) {
  console.log(props);

  const [toggle, setToggle] = useState(false);
  const [heightText, setHeightText] = useState();

  const toggleState = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightText(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="dropdown">
      <div onClick={toggleState} className="dropdown-visible">
        <h2 className="dropdown-title">{props.title}</h2>
        <img
          className={toggle ? "dropdown-chevron-visible" : "dropdown-chevron"}
          src={Chevron}
          alt="chevron"
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "dropdown-toggle animation" : "dropdown-toggle"}
        style={{ height: toggle ? `${heightText}` : "0px" }}
      >
        <p className="dropdown-content">{props.content}</p>
      </div>
    </div>
  );
}
