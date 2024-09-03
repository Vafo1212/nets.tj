import React from "react";
import "./RouterCard.scss";
const RouterCard = ({ data }) => {

  return (
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
      </div>
      <div className="routerCard_price">
        <h3>{data?.price}</h3>
        <p>{data?.installment}</p>
      </div>
      <div className="routerCard_dowload">
        {data?.downloadIcon}
        <p>{data?.download}</p>
      </div>
    </div>
  );
};

export default RouterCard;
