import React, { useEffect, useState } from 'react'
import './TarifsCards.scss'
import TarifCard from './TarifCard/TarifCard'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { NextArrow, PrevArrow } from './TarifCard/Arrows/Arrows';
import Form from '../../../General/Form/Form';
import TarifCustomCard from './TarifCustomCard/TarifCustomCard';
const TarifsCards = ({tarifCards, tarifIptvData,  tarifAdditionallyData,activeTitle,tarifYearCards}) => {
  
  const [showModal, setShowModal] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: false,
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
  useEffect(() => {
    window.dispatchEvent(new Event('resize'));   
  }, []);
  return (
    <div className='tarifsCards_block'>
      <Slider {...settings} >
      
      {
        activeTitle === 0 ?
        tarifCards?.map((e)=> 
        <>
        <TarifCard tarifCards={e} show={setShowModal} key={e.id}/>
        </>
        ) : activeTitle === 1 ? 
        tarifYearCards?.map((e)=> 
          <>
          <TarifCard tarifCards={e} show={setShowModal} key={e.id}/> 
          </>
          ) :
         activeTitle === 2 ?
        tarifIptvData?.map((e)=> 
         <TarifCustomCard img={e.img} title={e.title} subTitle={e.subTitle} data={e.data} price={e.price}  key={e.id}/>
        ) : activeTitle === 3 ? 
        tarifAdditionallyData?.map((e)=> 
          <TarifCustomCard img={e.img} title={e.title} subTitle={e.subTitle} data={e.data} price={e.price} longText={e.longText} key={e.id}/>
         ) : <p></p>
      }


      </Slider>
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

export default TarifsCards
