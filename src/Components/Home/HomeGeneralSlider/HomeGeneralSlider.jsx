import React, { useState, useEffect, useRef } from 'react';
import './HomeGeneralSlider.scss';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { homeSlider } from '../../../Modules/HomeModule/HomeLogic/HomeLogic';
import Form from '../../General/Form/Form';

const HomeGeneralSlider = ({data , black}) => {
  const [slides, setSlides] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();
  const getHomeSlider = () => {
    homeSlider().then(res => {
      setSlides(res.data)
    }).catch(err=> {
      console.log(err)
    })
  }
  useEffect(()=> {
    if(data){
      setSlides(data)
    } else {

      getHomeSlider()
    }

  }
    
    , [])
  useEffect(() => {
    progressRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
          return 0;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => clearInterval(progressRef.current);
  }, [slides?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides?.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides?.length) % slides?.length);
    setProgress(0);
  };

  return (
    <div className="slider_">
      <div className="slider-container">
        <div className="progress-indicators">
          {slides.map((slide, index) => (
            <div key={index} className="progress-bar-wrapper">
              <div 
                className="progress-bar"
                style={{ width: index === currentIndex ? `${progress}%` : '0%' }}
              ></div>
            </div>
          ))}
        </div>
        <div className="slider">
          <img src={slides[currentIndex]?.image} alt={slides[currentIndex]?.title} className="slider-image" />
          <div className="slider-content">
            <div className="slider-text">
              <h1 style={{color: black && '#202020'}}>{slides[currentIndex]?.title}</h1> 
              <ul style={{color: black && '#202020'}}>
                {slides[currentIndex]?.description.split('\n').map((line, index) => (
                  <li key={index} style={{color: black && '#202020'}}>{line}</li>
                ))}
              </ul>
            </div>
            <button className="slider-button" onClick={()=> setShowModal(true)}>{slides[currentIndex]?.text_btn}</button>
          </div> 
          <div className="img_blok">
            <img src={slides[currentIndex]?.img_item} alt="" />
          </div>
          <div className="slider-controls">
            <div className="slider-controls-item">
              <IoIosArrowBack onClick={prevSlide} className="left" />
            </div>
            <div className="slider-controls-item">
              <IoIosArrowForward onClick={nextSlide} className="right" />
            </div>
          </div>
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
  );
};

export default HomeGeneralSlider;
