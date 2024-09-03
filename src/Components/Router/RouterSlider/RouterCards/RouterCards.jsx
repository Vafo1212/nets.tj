import React from 'react'
import './RouterCards.scss'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../../Home/Tarifs/TarifsCards/TarifCard/Arrows/Arrows';
import RouterCard from './RouterCard/RouterCard';
const RouterCards = ({data}) => {
  // console.log(data, 'data')
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
    <div className='routerCards_block'>
      <Slider {...settings} >
      
      {
        data?.map((e)=> 
        <>
        <RouterCard data={e}/>
        </>
        )
      }
      </Slider>
    </div>
    )
}

export default RouterCards
