import React from "react";
import "./NewsItemTarif.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const NewsItemTarif = () => {
  return (
    <div className="newsItemTarif_container">
      <div className="newsItemTarif_block">
        <div className="newsItemTarif_item">
          <HiOutlineArrowNarrowRight className="newsItemTarif_icon" />
        </div>
        <h3>Перейти на новый тариф</h3>
      </div>
      <h4>NETS –национальный интернет-сервис провайдер!</h4>
    </div>
  );
};

export default NewsItemTarif;
