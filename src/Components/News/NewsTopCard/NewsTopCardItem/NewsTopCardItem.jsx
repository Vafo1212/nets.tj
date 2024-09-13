import React from "react";
import "./NewsTopCardItem.scss";
import img from "../../../../Assets/Home/img/HomeNews/image 17.png";
import timeImg from "../../../../Assets/Home/img/HomeNews/ion_time-outline.png";
import { formatDate } from "../../../../Modules/GeneralModule/GeneralLogic";
import { useNavigate } from "react-router-dom";
const NewsTopCardItem = ({img, data, read_time, title, id}) => {
  const navigate = useNavigate()
  return (
    <div className="newsTopCardItem_block" onClick={()=> navigate(`/newsItem/${id}`)}>
      <div className="newsTopCardItem_item">
        <img src={img} alt="" className="newsTopCardItem_img" />
        <div className="newsTopCardItemDate_block">
          <h6>{formatDate(data)}</h6>
          <div className="newsTopCardItemDate_item">
            <img src={timeImg} alt="" />
            <h6>{read_time} минуты чтения</h6>
          </div>
        </div>
      </div>
      <h3>{title} </h3>
    </div>
  );
};

export default NewsTopCardItem;
