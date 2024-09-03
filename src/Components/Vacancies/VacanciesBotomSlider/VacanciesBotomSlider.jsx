import React, { useState, useEffect } from 'react';
import './VacanciesBotomSlider.scss';
import VacanciesBotomSliderCard from './VacanciesBotomSliderCard/VacanciesBotomSliderCard'; 
import { sliderData } from '../../../Modules/VacanciesModule/VacanciesLogic/VacanciesLogic';

const VacanciesBotomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='vacanciesBotomSlider_container'>
      <div className="vacanciesBotomSlider_block">
        <div className="vacanciesBotomSlider_title">
          <h1>Почему NETS?</h1>
          <p>Давайте узнаем это у наших сотрудников!</p>
        </div>
        <div className="vacanciesBotomSlider_wrapper">
          <div
            className="vacanciesBotomSlider_item"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderData.map((item, index) => (
              <VacanciesBotomSliderCard key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="navigation_buttons">
          <button onClick={handlePrev}>←</button>
          <button onClick={handleNext}>Далее →</button>
        </div>
      </div>
    </div>
  );
};

export default VacanciesBotomSlider;
