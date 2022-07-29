import React from "react";
import "./SelectionScreen.css";
import text from "../data/text.json";
import selectionImg from "../images/selection.png";

export const SelectionScreen = () => {
  const info = text.info[1];

  return (
    <div className="selection-screen__content">
      <div className="selection-screen__image">
        <img src={selectionImg} alt="app-img" />
      </div>
      <div className="selection-screen__text">
        <div className="selection-screen__text__icon"></div>
        <div className="selection-screen__text__header">
          <p>{info.header}</p>
        </div>
        <div className="selection-screen__text__description">
          <p>{info.description}</p>
        </div>
      </div>
      <div className="selection-screen__button"></div>
    </div>
  );
};
