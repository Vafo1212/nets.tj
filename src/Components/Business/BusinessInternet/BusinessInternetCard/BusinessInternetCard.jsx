import React from "react";
import "./BusinessInternetCard.scss";
import MyButton from "../../../../UI/MyButton/MyButton";

const BusinessInternetCard = ({ img, title, text , show }) => {
  return (
    <div className="businessInternetCard_block">
      <div className="businessInternetCard_img">
        <img src={img} alt="" />
      </div>
      <div className="businessInternetCard_item">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="businessInternetCard_btn" onClick={()=> show(true)}>
        <MyButton width={"150px"} height={"36px"} name={"Оставить заявку"} size={'13.234px'} />
      </div>
    </div>
  );
};

export default BusinessInternetCard;
