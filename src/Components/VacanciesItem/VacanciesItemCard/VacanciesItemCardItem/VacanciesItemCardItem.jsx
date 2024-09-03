import React from "react";
import "./VacanciesItemCardItem.scss";
const VacanciesItemCardItem = ({ icon, text, subText }) => {
  return (
    <div className="vacanciesItemCardItem_block">
      <div className="vacanciesItemCardItem_item">
        <img src={icon} alt="" />
        <p>{text}</p>
      </div>
      <h6>{subText}</h6>
    </div>
  );
};

export default VacanciesItemCardItem;
