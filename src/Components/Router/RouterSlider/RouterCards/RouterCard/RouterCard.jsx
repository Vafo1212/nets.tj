import React, { useState } from "react";
import "./RouterCard.scss";
import MyButton from "../../../../../UI/MyButton/MyButton";
import Form from "../../../../General/Form/Form";

const RouterCard = ({ data , setActive }) => {
 
  return (
    <>
    <div className="routerCard_block">
      <div className="routerCard_img">
        <img src={data?.img} alt="" />
      </div>
      <h2>{data?.title}</h2>
      <h5>{data?.subTitle}</h5>
      <div className="routerCard_item">
        <p>{data?.lan}</p>
        <p>{data?.wifi}</p>
        <p>{data?.speed}</p>
        <div className="routerCardPurity_block">
          <p>{data?.purity}</p>
          <p>{data?.puritySpeed}</p>
        </div>
        <div className="routerCardPurity_block">
          <p>{data?.purityBottom}</p>
          <p>{data?.puritySpeedBottom}</p>
        </div>
        <p>{data?.ponInterface}</p>
        <p>{data?.wifiSpeed}</p>
        <p>{data?.standards}</p>
        <p>{data?.vlanSupport}</p>
        <p>{data?.multicast}</p>
      </div>
      <div className="routerCard_price">
        <h3>{data?.price}</h3>
        <p>{data?.installment}</p>
      </div>
      <div className="routerCard_btn" onClick={()=> setActive(true)}>

      <MyButton name={'Купить'} height={'40px'} width={'156px'}/>
      </div>
    </div>
    
    </>
  );
};

export default RouterCard;
