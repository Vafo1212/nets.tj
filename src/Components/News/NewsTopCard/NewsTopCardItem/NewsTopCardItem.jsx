import React from "react";
import "./NewsTopCardItem.scss";
import img from "../../../../Assets/Home/img/HomeNews/image 17.png";
import timeImg from "../../../../Assets/Home/img/HomeNews/ion_time-outline.png";
const NewsTopCardItem = () => {
  return (
    <div className="newsTopCardItem_block">
      <div className="newsTopCardItem_item">
        <img src={img} alt="" className="newsTopCardItem_img" />
        <div className="newsTopCardItemDate_block">
          <h6>5 февраля 2024</h6>
          <div className="newsTopCardItemDate_item">
            <img src={timeImg} alt="" />
            <h6>4 минуты чтения</h6>
          </div>
        </div>
      </div>
      <h3>Чем хороши российские операционные системы семейства Linux </h3>
    </div>
  );
};

export default NewsTopCardItem;
