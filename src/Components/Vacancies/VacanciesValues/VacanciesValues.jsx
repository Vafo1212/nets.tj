import React, { useState, useEffect } from "react";
import './VacanciesValues.scss';
import VacanciesValuesCard from "./VacanciesValuesCard/VacanciesValuesCard"; 
import valuesData from "../../../Modules/VacanciesModule/VacanciesLogic/VacanciesLogic";

const VacanciesValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % valuesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + valuesData.length) % valuesData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);  

    return () => clearInterval(interval);  
  }, [currentIndex]);  

  return (
    <div className="vacanciesValues_container">
      <div className="vacanciesValues_block">
        <div className="vacanciesValues_title">
          <h1>Ценности компании NETS</h1>
          <p>
            Наша культура — наше преимущество. Давай проверим, насколько
            совпадают наши ценности!
          </p>
        </div>
        <div className="vacanciesValues_item">
          <VacanciesValuesCard value={valuesData[currentIndex]} />
          <div className="navigation_buttons">
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext}>Далее →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesValues;
