import React from "react";
import './HomeEquipmentCards.scss'
const HomeEquipmentCards = ({img, name}) => {
  return (
    <div className="homeEquipmentCard_block"  >
      <div className="homeEquipmentCard_item">

      <h5>{name}</h5>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default HomeEquipmentCards;
