import React from "react";
import "./TarifCustomCard.scss";
import MyButton from "../../../../../UI/MyButton/MyButton";
const TarifCustomCard = ({img, title, subTitle, data, price, longText}) => {
  return (
    <div className="tarifCustomCard_block">
      <img src={img} alt="" />
      <div className="tarifCustomCard_item">
        <div className="tarifCustomCardTop_text">
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
        <h3>{data}</h3>
        <div className="tarifCustomCardBottom_text">
            <h2>{price} <span>{longText}</span> </h2>
            <div className="tarifCustomCardBottom_btn">
                <MyButton name={'Подключить'} width={'50%'} height={'44px'} size={'16px'}/>
                <MyButton name={'Подробнее'} width={'50%'} height={'44px'} size={'16px'} grey={true}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TarifCustomCard;
