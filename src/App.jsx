import "./App.css";
import React from "react";
import text from "./data/text.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import logo from "./images/logo.png";
import mapDesktop from "./images/map2.svg";
import menuDesktop from "./images/menu2.svg";
import map from "./images/map.svg";
import menu from "./images/menu.svg";
import leftHouse from "./images/leftHouse.png";
import rightHouse from "./images/rightHouse.png";
import roubleIcon from "./images/rouble.svg";
import telegramIcon from "./images/telegram.svg";
import roubleIconDesktop from "./images/roubleDesktop.svg";
import telegramIconDektop from "./images/telegramDesktop.svg";
import { BookingScreen } from "./screens/BookingScreen";
import { SelectionScreen } from "./screens/SelectionScreen";
import { CelebrationScreen } from "./screens/CelebrationScreen";
import { NewdwellingScreen } from "./screens/NewdwellingScreen";

const App = () => {
  const info = text.info;
  const screenWidth = window.screen.width;
  console.log(info);
  console.log("screenWidth", screenWidth);
  return (
    <div className="App__background">
      <img src={leftHouse} className="left-house" alt="img" />
      <img src={rightHouse} className="right-house" alt="img" />
      <div className="App">
        <div className="App__top-menu">
          <div className="App__map">
            <img className="App__map-icon" src={screenWidth > 960 ? mapDesktop : map} alt="map" />
          </div>
          <div className="App__logo-wrapper">
            <img className="App__logo" src={logo} alt="logo" />
          </div>
          <div className="App__menu">
            <img className="App__menu-icon" src={screenWidth > 960 ? menuDesktop : menu} alt="menu" />
          </div>
        </div>
        <div className="App__swiper-wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination
            scrollbar
          >
            <SwiperSlide>
              <BookingScreen />
            </SwiperSlide>
            <SwiperSlide>
              <SelectionScreen />
            </SwiperSlide>
            <SwiperSlide>
              <CelebrationScreen />
            </SwiperSlide>
            <SwiperSlide>
              <NewdwellingScreen />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="App__bottom-menu">
          <div className="App__payment">
            <img
              src={screenWidth > 960 ? roubleIconDesktop : roubleIcon}
              alt="payment"
            />
          </div>
          <div className="App__bottom-menu__block">
            <div className="App__bottom-menu__block-half"></div>
          </div>
          <div className="App__telegram">
            <img
              src={screenWidth > 960 ? telegramIconDektop : telegramIcon}
              alt="telegram"
            />
          </div>
        </div>
        <div className="App__bottom-menu__footer"></div>
      </div>
    </div>
  );
};

export default App;
