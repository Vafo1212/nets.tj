import React from "react";
import "./HomePromotion.scss";
import img from "../../../../Assets/Home/img/HomeEquipment/cute-young-woman-with-laptop-her-hands 2.png";
import imgMobi from "../../../../Assets/Home/img/HomeEquipment/Link.png";
const HomePromotion = () => {
  return (
    <>
    <div className="homePromotion_block">
      <div className="homePromotion_item">
        <h1>Акция</h1>
        <p>
          При приобретении годового интернет пакета вы получаете скидку 15% на
          весь раздел категории “роутеры”
        </p>
      </div>
      <img src={img} alt="" />
    </div>
      <img src={imgMobi} alt="" className="mobi" />
    </>
  );
};

export default HomePromotion;
