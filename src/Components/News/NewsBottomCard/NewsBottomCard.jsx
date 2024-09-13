import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем Link
import "./NewsBottomCard.scss";
import img from '../../../Assets/Home/img/HomeNews/image 17.png';
import imgTime from '../../../Assets/Home/img/HomeNews/ion_time-outline.png';
import { formatDate } from "../../../Modules/GeneralModule/GeneralLogic";

const NewsBottomCard = ({ newsData }) => {
  const navigate = useNavigate()

  if (!newsData || newsData.length === 0) {
    return <div>Загрузка ...</div>;
  }

  const maxLength = 150; 

  const getSnippet = (htmlContent) => {
    if (!htmlContent) return '';
    if (htmlContent.length <= maxLength) {
      return htmlContent;  
    }
    return htmlContent.slice(0, maxLength) + '...'; 
  };
  
  return (
    <div className="newsBottomCard_block" onClick={()=> navigate(`/newsItem/${newsData[0]?.id}`)}>
      <img src={newsData[0]?.image || img} alt="" className="newsBottomCard_img" />
      <div className="newsBottomCard_item">
        <div className="newsBottomCardData_block">
          <h6>{formatDate(newsData[0]?.created_at)}</h6>
          <div className="newsBottomCardData_item">
            <img src={imgTime} alt="" />
            <h6>{newsData[0]?.read_time} минуты чтения</h6>
          </div>
        </div>
        <h2>{newsData[0]?.title}</h2> 

          <p dangerouslySetInnerHTML={{ __html: getSnippet(newsData[0]?.text) }}></p>
   
      </div>
    </div>
  );
};

export default NewsBottomCard;
