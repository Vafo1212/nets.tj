import React from 'react'
import './VideoService.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoServiceItem from './VideoServiceItem/VideoServiceItem';

const VideoService = ({data}) => {
    const settini = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,    
        autoplaySpeed: 3000,   
        slidesToScroll: 1, 
        arrows: false,
        responsive: [
     
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
    <div className='videoService_container'>
      <div className="videoService_block">
        <h1>Возможности сервиса</h1>
        <div className="videoService_item">
           <Slider {...settini}>
            {
               data?.map((e)=>
                <VideoServiceItem title={e.title} subTitle={e.subTitle} key={e.id}/>
            )
            }
           </Slider>
        </div>
      </div>
    </div>
  )
}

export default VideoService
