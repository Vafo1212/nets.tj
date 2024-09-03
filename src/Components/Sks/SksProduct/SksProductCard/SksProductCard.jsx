import React from "react";
import './SksProductCard.scss'

const SksProductCard = ({number, title, subTitle}) => {
  return (
    <div className="sksProductCard_block">
      <h6>{number}</h6>
      <h3>{title}</h3>
      <p>
        {subTitle}
      </p>
    </div>
  );
};

export default SksProductCard;
