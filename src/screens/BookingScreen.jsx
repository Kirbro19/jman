import React from "react";
import "./BookingScreen.css";
import text from "../data/text.json";
import bookingImg from "../images/booking2.png";
import button1 from "../images/button1.svg";

export const BookingScreen = () => {
  const info = text.info[0];

  return (
    <div className="booking-screen__content">
      <div className="booking-screen__image">
        <img src={bookingImg} alt="app-img" />
      </div>
      <div className="booking-screen__text">
        <div className="booking-screen__text__icon"></div>
        <div className="booking-screen__text__header">
          <p>{info.header}</p>
        </div>
        <div className="booking-screen__text__description">
          <p>{info.description}</p>
        </div>
      </div>
      <div className="booking-screen__button">
        <img src={button1} alt="button" />
      </div>
    </div>
  );
};
