import React, { useState, useEffect, useRef } from 'react';
import './HomeGeneralSlider.scss';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HomeGeneralSlider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef();

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
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
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
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="slider-image" />
          <div className="slider-content">
            <div className="slider-text">
              <h1>{slides[currentIndex].title}</h1> 
              <ul>
                {slides[currentIndex].description.split('\n').map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <button className="slider-button">{slides[currentIndex].textBtn}</button>
          </div> 
          <div className="img_blok">
            <img src={slides[currentIndex].imgItem} alt="" />
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
    </div>
  );
};

export default HomeGeneralSlider;
