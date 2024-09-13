import React, { useState } from 'react'
import './BusinessInternet.scss'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import BusinessInternetCard from './BusinessInternetCard/BusinessInternetCard';
import Form from '../../General/Form/Form';


const BusinessInternet = ({data}) => {
  const [showModal, setShowModal] = useState(false)
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,  
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,   
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,   
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
    <div className='businessInternet_container' id='internet'>
      <div className="businessInternet_block">
        <h3>Выберите интернет для вашего бизнеса</h3>
        <div className="businessInternet_item">
           <Slider {...setting}>
              {
                data?.map((i)=> 
                 <BusinessInternetCard img={i.img} title={i.title} text={i.text} show={setShowModal}/>
                )
              }
           </Slider>
        </div>
      </div>
      {
        showModal &&
      <div className="form_container">
        <div className="form_block">
          <Form show={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
      }
    </div>
  )
}

export default BusinessInternet
