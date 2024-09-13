import React from "react";
import "./VacanciesItemTextCard.scss";
const VacanciesItemTextCard = ({index, name, text}) => {
  return (
    <div className="vacanciesItemTextCard_block">
        <h2>0{index+1}</h2>
      <div className="vacanciesItemTextCard_item">
        <h2>{name}</h2>
        <div dangerouslySetInnerHTML={{ __html: text }} className="vacanciesItemTextCard_text"> 
        </div>
      </div>
    </div>
  );
};

export default VacanciesItemTextCard;
