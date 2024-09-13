import React from "react";
import "./HomeNewsCard.scss";
import img from "../../../../Assets/Home/img/HomeNews/image 17.png";
import timeImg from "../../../../Assets/Home/img/HomeNews/ion_time-outline.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { formatDate } from "../../../../Modules/GeneralModule/GeneralLogic";
import { useNavigate } from "react-router-dom";

const HomeNewsCard = ({ active, newsData }) => {
  const navigate = useNavigate()
  if (!newsData || newsData.length === 0) {
    return <div>No news data available</div>;
  }
  const date = formatDate(newsData[0]?.created_at);

  return (
    <div className="homeNewsCard_container">
      <div className="homeNewsCard_item" onClick={()=> navigate(`/newsItem/${newsData[0]?.id}`)}>
        <img src={newsData[0]?.image || img} alt="News" />
        <div className="homeNewsCardDate_block">
          <h6>{date}</h6>
          <div className="homeNewsCardDate_item">
            <img src={timeImg} alt="Time" />
            <h6>{newsData[0]?.read_time || 'N/A'} минуты чтения</h6>
          </div>
        </div>
        <h2>{newsData[0]?.title || 'Untitled'}</h2>
      </div>
      <div className="homeNewsCardText_block">
        {
          newsData.slice(0, 2).map((e, index) => (
            <div key={index} className="homeNewsCardText_item" onClick={()=> navigate(`/newsItem/${e.id}`)}>
              <div className="homeNewsCardTitle_block">
                <h6>{formatDate(e.created_at)}</h6>
                <div className="homeNewsCardDate_item">
                  <img src={timeImg} alt="Time" />
                  <h6>{e.read_time || 'N/A'} минуты чтения</h6>
                </div>
              </div>
              <h2>{e.title || 'Untitled'}</h2>
            </div>
          ))
        }

        {!active && (
          <div className="homeNewsCardText_arrow" onClick={()=> navigate('/news')}>
            <h3>Читать другие статьи</h3>
            <HiArrowLongRight className="homeNewsCardTextArrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNewsCard;
