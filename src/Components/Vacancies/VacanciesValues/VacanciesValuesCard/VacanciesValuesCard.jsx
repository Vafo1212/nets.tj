import React from "react";
import "./VacanciesValuesCard.scss";

const VacanciesValuesCard = ({ value }) => {
  return (
    <div className="vacanciesValuesCard_block">
      <img src={value.img} alt="" />
      <div className="vacanciesValuesCard_item">
        <h2>{value.title}</h2>
        <p>{value.description}</p>
      </div>
    </div>
  );
};

export default VacanciesValuesCard;
