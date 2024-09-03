import React from "react";
import "./NewsBottomCard.scss";
import img from '../../../Assets/Home/img/HomeNews/image 17.png'
import imgTime from '../../../Assets/Home/img/HomeNews/ion_time-outline.png'
const NewsBottomCard = () => {
  return (
    <div className="newsBottomCard_block">
      <img src={img} alt="" className="newsBottomCard_img"/>
      <div className="newsBottomCard_item">
        <div className="newsBottomCardData_block">
          <h6>5 февраля 2024</h6>
          <div className="newsBottomCardData_item">
            <img src={imgTime} alt="" />
            <h6>4 минуты чтения</h6>
          </div>
        </div>
          <h2>Чем хороши российские операционные системы семейства Linux</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
          </p>
      </div>
    </div>
  );
};

export default NewsBottomCard;
