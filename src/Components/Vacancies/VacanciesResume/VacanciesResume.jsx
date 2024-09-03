import React from "react";
import "./VacanciesResume.scss";
const VacanciesResume = () => {
  return (
    <div className="vacanciesResume_content">
      <div className="vacanciesResume_block">
        <div className="vacanciesResume_item">
          <h1>Нет подходящей вакансии?</h1>
          <p>Всё равно присылай резюме, мы обязательно его рассмотрим!</p>
        </div>
        <button>Отправить резюме</button>
      </div>
    </div>
  );
};

export default VacanciesResume;
