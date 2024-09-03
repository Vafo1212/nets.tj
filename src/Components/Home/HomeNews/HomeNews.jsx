import React from "react";
import "./HomeNews.scss";
import HomeNewsCard from "./HomeNewsCard/HomeNewsCard";
const HomeNews = ({active}) => {
  return (
    <div className="homeNews_container" id="news">
      <div className="homeNews_block">
        <div className="homeNews_title">
          <h1>Новости «Простые технологии»</h1>
          <p>
            Блог о современных технологиях для бизнеса и частных лиц. Цифровые
            продукты и решения для простых пользователей и профессионалов.
          </p>
        </div>
        <HomeNewsCard active={active}/>
      </div>
    </div>
  );
};

export default HomeNews;
