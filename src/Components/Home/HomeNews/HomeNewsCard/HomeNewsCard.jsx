import React from "react";
import "./HomeNewsCard.scss";
import img from "../../../../Assets/Home/img/HomeNews/image 17.png";
import timeImg from "../../../../Assets/Home/img/HomeNews/ion_time-outline.png";
import { HiArrowLongRight } from "react-icons/hi2";
const HomeNewsCard = ({active}) => {
  return (
    <div className="homeNewsCard_container">
      <div className="homeNewsCard_item">
        <img src={img} alt="" />
        <div className="homeNewsCardDate_block">
          <h6>5 февраля 2024</h6>
          <div className="homeNewsCardDate_item">
            <img src={timeImg} alt="" />
            <h6>4 минуты чтения</h6>
          </div>
        </div>
        <h2>Чем хороши российские операционные системы семейства Linux</h2>
      </div>
      <div className="homeNewsCardText_block">
        <div className="homeNewsCardText_item">
          <div className="homeNewsCardTitle_block">
            <h6>5 февраля 2024</h6>
            <div className="homeNewsCardDate_item">
              <img src={timeImg} alt="" />
              <h6>4 минуты чтения</h6>
            </div>
          </div>
        <h2>Чем хороши российские операционные системы семейства Linux</h2>
        </div>
        <div className="homeNewsCardText_item">
          <div className="homeNewsCardTitle_block">
            <h6>5 февраля 2024</h6>
            <div className="homeNewsCardDate_item">
              <img src={timeImg} alt="" />
              <h6>4 минуты чтения</h6>
            </div>
          </div>
        <h2>Чем хороши российские операционные системы семейства Linux</h2>
        </div>
        <div className="homeNewsCardText_item">
          <div className="homeNewsCardTitle_block">
            <h6>5 февраля 2024</h6>
            <div className="homeNewsCardDate_item">
              <img src={timeImg} alt="" />
              <h6>4 минуты чтения</h6>
            </div>
          </div>
        <h2>Чем хороши российские операционные системы семейства Linux</h2>
        </div>
        {!active &&
        <div className="homeNewsCardText_arrow">
            <h3>Читать другие статьи</h3>
            <HiArrowLongRight className="homeNewsCardTextArrow"/>
        </div>}
      </div>
    </div>
  );
};

export default HomeNewsCard;
