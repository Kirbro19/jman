import React from "react";
import "./NewdwellingScreen.css";
import text from "../data/text.json";
import estateImg from "../images/estate.png";

export const NewdwellingScreen = () => {
  const info = text.info[3];

  return (
    <div className="newdwelling-screen__content">
      <div className="newdwelling-screen__image">
        <img src={estateImg} alt="app-img" />
      </div>
      <div className="newdwelling-screen__image">
        <img src={estateImg} alt="app-img" />
        </div>
      <div className="newdwelling-screen__text">
        <div className="newdwelling-screen__text__icon"></div>
        <div className="newdwelling-screen__text__header">
          <p>{info.header}</p>
        </div>
        <div className="newdwelling-screen__text__description">
          <p>{info.description}</p>
        </div>
      </div>
      <div className="newdwelling-screen__button"></div>
    </div>
  );
};
