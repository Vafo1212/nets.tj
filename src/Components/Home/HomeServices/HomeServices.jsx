import React from 'react'
import './HomeServices.scss'
import HomeServicesCard from './HomeServicesCard/HomeServicesCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeServices = ({homeServicesData}) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,    
    autoplaySpeed: 3000,   
    slidesToScroll: 1, 
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 1280,  
      //   settings: {
      //     slidesToShow: 2,  
      //     slidesToScroll: 1,  
      //     nextArrow: false,
      //     prevArrow: false, 
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 1124,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,  
          nextArrow: false,
          prevArrow: false, 
          dots: true,
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
        },
      },
    ],
  };
  return (
    <div className='homeServices_container' id='services'>
      <div className="homeServices_block">
        <h1>Услуги для дома</h1>
        <div className="homeServices_item">
           <Slider {...setting}>
            {
             homeServicesData?.map((e)=>
             <HomeServicesCard img={e.img} title={e.title} subTitle={e.subTitle} textBtn={e.textBtn}/>
            )
            }  
           </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeServices
