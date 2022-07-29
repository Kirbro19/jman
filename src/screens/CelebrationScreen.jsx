import React from "react";
import "./CelebrationScreen.css";
import text from "../data/text.json";
import celebrationImg from "../images/celebration.png";

export const CelebrationScreen = () => {
  const info = text.info[2];

  return (
    <div className="celebration-screen__content">
      <div className="celebration-screen__image">
        <img src={celebrationImg} alt="app-img" />
      </div>
      <div className="celebration-screen__text">
        <div className="celebration-screen__text__icon"></div>
        <div className="celebration-screen__text__header">
          <p>{info.header}</p>
        </div>
        <div className="celebration-screen__text__description">
          <p>{info.description}</p>
        </div>
      </div>
      <div className="celebration-screen__button"></div>
    </div>
  );
};
