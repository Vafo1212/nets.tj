import React from "react";
import "./HomeNews.scss";
import HomeNewsCard from "./HomeNewsCard/HomeNewsCard";
const HomeNews = ({active, newsData}) => {
  return (
    <div className="homeNews_container" id="news">
      <div className="homeNews_block">
        <div className="homeNews_title">
          <h1>Новости и Акции</h1>
          <p>
            Блог о современных технологиях для бизнеса и частных лиц. Цифровые
            продукты и решения для простых пользователей и профессионалов.
          </p>
        </div>
        <HomeNewsCard active={active} newsData={newsData}/>
      </div>
    </div>
  );
};

export default HomeNews;
