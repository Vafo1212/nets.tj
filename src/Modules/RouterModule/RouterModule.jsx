import React from "react";
import './RouterModule.scss'
import HomeGeneralSlider from "../../Components/Home/HomeGeneralSlider/HomeGeneralSlider";
import Footer from "../../Components/General/Footer/Footer";
import WhoisResponse from "../../Components/Whois/WhoisResponse/WhoisResponse";

import img from "../../Assets/Home/img/111_Монтажная область 1 back.png";
import img2 from "../../Assets/Home/img/111_Монтажная область 1 копия.png";
import img3 from "../../Assets/Home/img/111-06.png";
import img4 from "../../Assets/Home/img//111-02.png";
import img5 from "../../Assets/Home/img/111-08.png";
import img6 from "../../Assets/Home/img/111-03.png";
import Menu from "../../Components/General/Menu/Menu";

import { FiDownload } from "react-icons/fi";
import RouterSlider from "../../Components/Router/RouterSlider/RouterSlider";

import routerImg from "../../Assets/Router/img/image 28 (1).png";
import RouterWarranty from "../../Components/Router/RouterWarranty/RouterWarranty";

const RouterModule = () => {
  const slides = [
    {
      image: img,
      imgItem: img2,
      title: "Годовые пакеты",
      description: "Приобретай годовые пакеты по выгодной цене!",
      textBtn: "Подробнее",
    },
    {
      image: img6,
      imgItem: img5,
      title: "Приведи друга",
      description:
        "Объединяйся с друзьями и получайте выгоду! Заполни анкету на подключение - и получи 50% кэшбека. Больше друзей, больше денег в твоем личном кабинете!",
      textBtn: "Подробнее",
    },
    {
      image: img4,
      imgItem: img3,
      title: "Ночной безлимит",
      description: "Ночной безлимит всего за 25 сомони с 23.00 до 06.00",
      textBtn: "Подробнее",
    },
  ];

  const routerTitle = [
    { name: "Рассрочка 12 месяцев" },
    { name: "Рассрочка 24 месяца" },
    { name: "Оплата сразу" },
  ];
  const router = [
    {
      id: 1,
      img: routerImg,
      title: "BDCOM GP1704-2F-E",
      subTitle: "Роутер",
      lan: "Гигабитные порты LAN",
      wifi: "Двухдиапазонный Wi-Fi",
      speed: "Скорость передачи данных:",
      purity: "Частота 2,4 ГГц",
      puritySpeed: "100 Мбит/с",
      purityBottom: "Частота 5 ГГц",
      puritySpeedBottom: "100 Мбит/с",
      price: "125 TJS/мес",
      installment: "Рассрочка на 12 месяцев Без первого взноса",
      download: "Скачать полную информацию",
      downloadIcon: <FiDownload className="download_icon" />,
    },
    {
      id: 2,
      img: routerImg,
      title: "BDCOM GP1704-2F-E",
      subTitle: "Роутер",
      lan: "Гигабитные порты LAN",
      wifi: "Двухдиапазонный Wi-Fi",
      speed: "Скорость передачи данных:",
      purity: "Частота 2,4 ГГц",
      puritySpeed: "100 Мбит/с",
      purityBottom: "Частота 5 ГГц",
      puritySpeedBottom: "100 Мбит/с",
      price: "125 TJS/мес",
      installment: "Рассрочка на 12 месяцев Без первого взноса",
      download: "Скачать полную информацию",
      downloadIcon: <FiDownload className="download_icon" />,
    },
    {
      id: 3,
      img: routerImg,
      title: "BDCOM GP1704-2F-E",
      subTitle: "Роутер",
      lan: "Гигабитные порты LAN",
      wifi: "Двухдиапазонный Wi-Fi",
      speed: "Скорость передачи данных:",
      purity: "Частота 2,4 ГГц",
      puritySpeed: "100 Мбит/с",
      purityBottom: "Частота 5 ГГц",
      puritySpeedBottom: "100 Мбит/с",
      price: "125 TJS/мес",
      installment: "Рассрочка на 12 месяцев Без первого взноса",
      download: "Скачать полную информацию",
      downloadIcon: <FiDownload className="download_icon" />,
    },
    {
      id: 4,
      img: routerImg,
      title: "BDCOM GP1704-2F-E",
      subTitle: "Роутер",
      lan: "Гигабитные порты LAN",
      wifi: "Двухдиапазонный Wi-Fi",
      speed: "Скорость передачи данных:",
      purity: "Частота 2,4 ГГц",
      puritySpeed: "100 Мбит/с",
      purityBottom: "Частота 5 ГГц",
      puritySpeedBottom: "100 Мбит/с",
      price: "125 TJS/мес",
      installment: "Рассрочка на 12 месяцев Без первого взноса",
      download: "Скачать полную информацию",
      downloadIcon: <FiDownload className="download_icon" />,
    },
    {
      id: 5,
      img: routerImg,
      title: "BDCOM GP1704-2F-E",
      subTitle: "Роутер",
      lan: "Гигабитные порты LAN",
      wifi: "Двухдиапазонный Wi-Fi",
      speed: "Скорость передачи данных:",
      purity: "Частота 2,4 ГГц",
      puritySpeed: "100 Мбит/с",
      purityBottom: "Частота 5 ГГц",
      puritySpeedBottom: "100 Мбит/с",
      price: "125 TJS/мес",
      installment: "Рассрочка на 12 месяцев Без первого взноса",
      download: "Скачать полную информацию",
      downloadIcon: <FiDownload className="download_icon" />,
    },
  ];
  const routerWarrantyData = [
    {
      id: 1,
      title: "Стандартная гарантия",
      subTitle:
        "Неисправный товар можно вернуть или обменять в течение всего гарантийного срока, при соблюдении следующих условий:",
      list: [
        {
          id: 1,
          item: "В товаре присутствует явный дефект",
        },
        {
          id: 2,
          item: "Товар без механических повреждений и внешних воздействий",
        },
      ],
    },
    {
      id: 2,
      title: "Стандартная гарантия",
      subTitle:
        "В течение всего гарантийного срока товар можно отремонтировать бесплатно. Но дефект не должен быть результатом неправильной эксплуатации или механического повреждения",
    },
  ];
  const routerResponse = [
    {
      id: 1,
      title: "Какие способы оплаты доступны?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 2,
      title: "Как я могу проверить баланс моего счета?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 3,
      title: "Сколько времени занимает подключение?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 4,
      title: "Как можно продлить или приостановить услуги?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 5,
      title: "Предусмотрены ли у вас скидки или акции для новых клиентов?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 6,
      title: "Какие документы нужны для подключения интернета?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 7,
      title:
        "Как я могу настроить или изменить пароль для моего Wi-Fi роутера?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
    {
      id: 8,
      title: "Как я могу узнать скорость моего интернет-соединения?",
      subTitle: "бла бла бла бла бла бла бла бла бла бла бла бла бла бла",
    },
  ];
  return (
    <div>
      <Menu />
      <HomeGeneralSlider slides={slides} />
      <RouterSlider title={routerTitle} data={router} titleText={"Роутеры"} />
      <RouterSlider title={routerTitle} data={router} titleText={"IP TV"} />
      <RouterWarranty data={routerWarrantyData} />
      <div className="routerResonse_container">
        <div className="routerResonse_block">
          <WhoisResponse data={routerResponse} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RouterModule;
