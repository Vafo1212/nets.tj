import React from 'react'
import './HomeAdvantages.scss'
import HomeAdvantagesCard from './HomeAdvantagesCard/HomeAdvantagesCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeAdvantages = ({homeAdvantagesCardData, title}) => {
    const settin = {
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
    <div className='homeAdvantages_container'>
        <div className="homeAdvantages_block">
            <h1>{title}</h1>
            <div className="homeAdvantages_item">
                <Slider {...settin}>

             {
                homeAdvantagesCardData?.map((e)=> 
                
                <HomeAdvantagesCard img={e.img} title={e.title} subTitle={e.subTitle}/> 
                )
             }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default HomeAdvantages
