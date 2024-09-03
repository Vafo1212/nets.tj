import React, { useState } from "react";
import "./VpsSlider.scss";
import {
  NextArrow,
  PrevArrow,
} from "../../Home/Tarifs/TarifsCards/TarifCard/Arrows/Arrows";
import Slider from "react-slick";
import VpsSliderCard from "./VpsSliderCard/VpsSliderCard";
const VpsSlider = ({vpsData, title, subTitle, color, colorButton}) => { 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="vpsSlider_container">
      <div className="vpsSlider_block">
        <div className="vpsSlider_title">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        </div>
        <div className="vpsSlider_item">
          <Slider {...settings}>
            {vpsData?.map((e) => (
              <>
                <VpsSliderCard vpsSliderCards={e} color={color} colorButton={colorButton}/>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VpsSlider;
