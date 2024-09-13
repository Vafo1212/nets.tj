import React from "react";
import "./VacanciesCard.scss";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../../Modules/GeneralModule/GeneralLogic";

const VacanciesCard = ({vacanciesData}) => {
  const navigate = useNavigate()
  const data = formatDate(vacanciesData.created_at)
  return (
    <div className="vacanciesCard_block" onClick={()=> navigate(`/vacanciesItem/${vacanciesData.id}`)}>
      <h3>{vacanciesData.title}</h3>
      <p>
        {vacanciesData.description}
      </p>
      <div className="vacanciesCard_item">
        <h6>{data}</h6>
        <p>{vacanciesData.country}</p>
      </div>
    </div>
  );
};

export default VacanciesCard;
