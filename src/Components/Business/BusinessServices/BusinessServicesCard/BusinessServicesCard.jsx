import React from "react";
import "./BusinessServicesCard.scss";
import { NavLink } from "react-router-dom";
const BusinessServicesCard = ({ img, title, text, link, active }) => {
  return (
    <div className="businessServicesCard_block">
      <div className="businessServicesCard_item">
        <h3>{title}</h3>
        <p>{text}</p>
        {
        active === true ?
        <a href={link}>Подробнее</a> : 
        <NavLink to={link}>
          <h4>Подробнее</h4>
        </NavLink> 
        }
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default BusinessServicesCard;
