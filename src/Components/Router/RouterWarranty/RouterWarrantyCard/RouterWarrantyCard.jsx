import React from "react";
import "./RouterWarrantyCard.scss";
const RouterWarrantyCard = ({ title, subTitle, list }) => {
  return (
    <div className="routerWarrantyCard_block">
      <h2>{title}</h2>
      
      <p>{subTitle}</p>
      <ul>
        {list?.map((e) => (
          <li key={e.id}>{e.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RouterWarrantyCard;
