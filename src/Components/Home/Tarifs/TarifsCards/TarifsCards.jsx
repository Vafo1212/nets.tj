import React from 'react'
import './TarifsCards.scss'
import TarifCard from './TarifCard/TarifCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { NextArrow, PrevArrow } from './TarifCard/Arrows/Arrows';
const TarifsCards = ({tarifCards}) => {
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
    <div className='tarifsCards_block'>
      <Slider {...settings} >
      
      {
        tarifCards?.map((e)=> 
        <>
        <TarifCard tarifCards={e}/>
        </>
        )
      }
      </Slider>
    </div>
  )
}

export default TarifsCards
