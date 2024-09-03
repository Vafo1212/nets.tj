import React from "react";
import "./FooterContact.scss";
import img1 from "../../../../Assets/General/Img/Footer/IMAGE.png";
import img2 from "../../../../Assets/General/Img/Footer/IMAGE (1).png";
import FooterContactCard from "./FooterContactCard/FooterContactCard";
import appStore from "../../../../Assets/General/Img/Footer/appStore.svg";
import playMarket from "../../../../Assets/General/Img/Footer/googlePlay.svg";
import logo from "../../../../Assets/General/Img/Footer/logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiOdnoklassniki } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
import { IoLogoVk } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
const FooterContact = () => {
  const footerContactCard = [
    {
      id: 1,
      img: img1,
      title: "Куда обратиться",
      subTitle: "Контакты и адреса",
    },
    {
      id: 2,
      img: img2,
      title: "Новости",
      subTitle: "Более 200 статей и ответов",
    },
  ];
  return (
    <div className="footerContact_block">
      <div className="footerLogo_block">
        <img src={logo} alt="" />
        <p>
        Таджикистан г.Душанбе ул.Т.Пулоди 41 <br /> Ориентир: Хлебзавод
        </p>
        <p>Филиалы и точки обслуживания</p>
      </div>
      <div className="footerContactPhone_block">
        <div className="footerContactPhone_item">
          <h3>4848</h3>
          <p>Короткий номер</p>
        </div>
        <div className="footerContactPhone_item">
          <h2>41 800 48 48</h2>
          <p>Для звонков с городских телефонов</p>
        </div>
        <div className="footerContactPhone_item">
          <h2>info@nets.tj</h2>
          <p>Для информации и предложений</p>
        </div>
      </div>
      <div className="footerContactMobileApp_container">
        <div className="footerContactMobileApp_block">
          <p>Приложение «Nets Account» для смартфонов</p>
          <div className="footerContactMobileApp_item">
            <img src={appStore} alt="" />
            <img src={playMarket} alt="" />
          </div>
        </div>
        <div className="footerContactMobileSocial_block">
          <p>Соцмедиа</p>
          <div className="footerContactMobileSocial_item">
            <div className="footerContactMobileSocialIcon_block">
              <a href="https://t.me/netssolution" target="_blank">
                <FaTelegramPlane className="footerContactMobileSocial_icon" />
              </a>
            </div>
            <div className="footerContactMobileSocialIcon_block">
              <a href="https://www.facebook.com/nets.tj/" target="_blank">
                <FaFacebookF className="footerContactMobileSocial_icon" />
              </a>
            </div>
            <div className="footerContactMobileSocialIcon_block">
              <a href="https://www.linkedin.com/feed/">
              <TiSocialLinkedin className="footerContactMobileSocial_icon" />
              </a>
            </div>
            {/* <div className="footerContactMobileSocialIcon_block">
              <SiOdnoklassniki className="footerContactMobileSocial_icon" />
            </div> */}
            <div className="footerContactMobileSocialIcon_block">
              <a
                href="https://www.instagram.com/nets.tj?igsh=eTd4MHhwbXhxMGJv"
                target="_blank"
              >
                <AiOutlineInstagram className="footerContactMobileSocial_icon" />
              </a>
            </div>
            {/* <div className="footerContactMobileSocialIcon_block">
              <IoMdArrowDropright className="footerContactMobileSocial_icon" />
            </div>
            <div className="footerContactMobileSocialIcon_block">
              <IoLogoVk className="footerContactMobileSocial_icon" />
            </div>
            <div className="footerContactMobileSocialIcon_block">
              <FaTiktok className="footerContactMobileSocial_icon" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
