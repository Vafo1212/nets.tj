import React from "react";
import "./HomeIptvCard.scss";
import img from "../../../../Assets/Home/img/HomeIptv/image 19.png";
const HomeIptvCard = () => {
  return (
    <div className="homeIptvCard_block">
      <div className="homeIptvCard_item">
        <p>
          Любимые фильмы, программы и сериалы в отличном качестве и без рекламы
        </p>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default HomeIptvCard;
