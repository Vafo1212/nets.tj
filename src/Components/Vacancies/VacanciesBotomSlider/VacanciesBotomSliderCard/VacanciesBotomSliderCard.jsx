import React from "react";
import "./VacanciesBotomSliderCard.scss";

const VacanciesBotomSliderCard = ({ data }) => {
  return (
    <div className="vacanciesBotomSliderCard_content">
      <img src={data.img} alt="" />
      <div className="vacanciesBotomSliderCard_block">
        <p>{data.text}</p>
        <div className="vacanciesBotomSliderCard_item">
          <img src={data.img} alt="" />
          <div className="vacanciesBotomSliderCardText_block">
            <h3>{data.name}</h3>
            <h3>{data.position}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesBotomSliderCard;
