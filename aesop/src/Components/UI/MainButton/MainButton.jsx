import React, { useState } from "react";
import "./MainButton.scss";
import arrow from "./../../../img/arrow.svg";
import blackArrow from "./../../../img/blackArrow.svg";

const MainButton = (props) => {
  const [whiteArrow, setWhiteArrow] = useState(props.type);
  return (
    <div
      onMouseOver={() => {
        setWhiteArrow((pre) => !pre);
      }}
      onMouseLeave={() => {
        setWhiteArrow((pre) => !pre);
      }}
      className={`mainButton ${props.type ? "whiteBtn" : "blackBtn"}`}
    >
      <p className="mainButtonText">{props.text}</p>
      <img src={whiteArrow ? arrow : blackArrow} />
    </div>
  );
};

export default MainButton;
