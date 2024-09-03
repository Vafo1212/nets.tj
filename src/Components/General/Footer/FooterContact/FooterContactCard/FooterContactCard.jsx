import React from "react";
import "./FooterContactCard.scss";
const FooterContactCard = ({ img, title, subTitle }) => {
  return (
    <div className="footerContactCard_block">
      <img src={img} alt="" />
      <div className="footerContactCard_item">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default FooterContactCard;
