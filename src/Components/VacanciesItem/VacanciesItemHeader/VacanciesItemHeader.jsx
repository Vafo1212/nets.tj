import React from "react";
import "./VacanciesItemHeader.scss";
import img from "../../../Assets/VacanciesItem/metaverse_char_004 1.png";
const VacanciesItemHeader = () => {
  return (
    <div className="vacanciesItemHeader_container">
      <div className="vacanciesItemHeader_block">
        <div className="vacanciesItemHeader_item">
          <div className="vacanciesItemHeader_title">
            <h1>Консультант call-центра</h1>
            <button>Откликнуться</button>
          </div>
          <div className="vacanciesItemHeader_text">
            <p>
              NETS – национальный интернет-сервис-провайдер, предлагающий
              инновационные решения для частных пользователей, бизнеса и
              государственных структур. Мы гордимся тем, что предоставляет
              высококачественные и надежные интернет-услуги, непрерывное
              соединение и высочайший уровень обслуживания.
            </p>
            <p>
              Наша миссия – сделать жизнь наших клиентов проще и удобнее,
              предоставляя все необходимые интернет-решения. Мы считаем, что в
              современном мире стабильное и быстрое интернет-соединение является
              ключом к достижению успеха.
            </p>
          </div>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default VacanciesItemHeader;
